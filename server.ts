import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory / file-backed storage for contact enquiries
interface ContactEnquiry {
  id: string;
  referenceCode: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  assistanceType: string;
  projectDescription: string;
  language: string;
  createdAt: string;
}

const enquiries: ContactEnquiry[] = [];
const STORAGE_FILE = path.join(__dirname, 'enquiries.json');

// Load existing enquiries if file exists
if (fs.existsSync(STORAGE_FILE)) {
  try {
    const raw = fs.readFileSync(STORAGE_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      enquiries.push(...parsed);
    }
  } catch (err) {
    console.error('Failed to parse enquiries.json:', err);
  }
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'FidePath Expert Services API',
    timestamp: new Date().toISOString()
  });
});

// Real contact submission endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    company,
    email,
    phone,
    subject,
    assistanceType,
    projectDescription,
    privacyConsent,
    language = 'en'
  } = req.body;

  // Validation messages per language
  const isEs = language === 'es';
  const isCa = language === 'ca';

  const errors: Record<string, string> = {};

  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    errors.firstName = isEs
      ? 'El nombre es obligatorio.'
      : isCa
      ? 'El nom és obligatori.'
      : 'First name is required.';
  }
  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    errors.lastName = isEs
      ? 'Los apellidos son obligatorios.'
      : isCa
      ? 'Els cognoms són obligatoris.'
      : 'Last name is required.';
  }
  if (!company || typeof company !== 'string' || !company.trim()) {
    errors.company = isEs
      ? 'La empresa u organización es obligatoria.'
      : isCa
      ? 'L\'empresa o organització és obligatòria.'
      : 'Company name is required.';
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = isEs
      ? 'Introduzca un correo electrónico corporativo válido.'
      : isCa
      ? 'Introdueixi un correu electrònic corporatiu vàlid.'
      : 'A valid corporate or professional email address is required.';
  }
  if (!subject || typeof subject !== 'string' || !subject.trim()) {
    errors.subject = isEs
      ? 'El asunto de la consulta es obligatorio.'
      : isCa
      ? 'L\'assumpte de la consulta és obligatori.'
      : 'Subject is required.';
  }
  if (!assistanceType || typeof assistanceType !== 'string' || !assistanceType.trim()) {
    errors.assistanceType = isEs
      ? 'Seleccione el tipo de asistencia técnica requerida.'
      : isCa
      ? 'Seleccioni el tipus d\'assistència tècnica requerida.'
      : 'Type of assistance is required.';
  }
  if (!projectDescription || typeof projectDescription !== 'string' || projectDescription.trim().length < 15) {
    errors.projectDescription = isEs
      ? 'Describa brevemente su proyecto o consulta (mínimo 15 caracteres).'
      : isCa
      ? 'Descrigui breument el seu projecte o consulta (mínim 15 caràcters).'
      : 'Please provide a brief description of your project or matter (min 15 characters).';
  }
  if (!privacyConsent) {
    errors.privacyConsent = isEs
      ? 'Debe aceptar la política de privacidad para enviar la consulta.'
      : isCa
      ? 'Ha d\'acceptar la política de privadesa per enviar la consulta.'
      : 'You must accept the privacy policy to submit your enquiry.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: isEs
        ? 'Error de validación. Por favor, revise la información remitida.'
        : isCa
        ? 'Error de validació. Si us plau, revisi la informació facilitada.'
        : 'Validation failed. Please verify the submitted information.',
      errors
    });
  }

  // Generate a distinct reference code
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `FP-${dateStr}-${randomSuffix}`;

  const enquiry: ContactEnquiry = {
    id: `enq_${Date.now()}_${randomSuffix}`,
    referenceCode,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    company: company.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : undefined,
    subject: subject.trim(),
    assistanceType: assistanceType.trim(),
    projectDescription: projectDescription.trim(),
    language: typeof language === 'string' ? language : 'en',
    createdAt: new Date().toISOString()
  };

  enquiries.push(enquiry);

  // Save to persistent file
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write enquiries to disk:', err);
  }

  console.log(`[FidePath Contact API] New enquiry received: ${referenceCode} from ${enquiry.email} (${enquiry.company})`);

  return res.status(201).json({
    success: true,
    referenceCode,
    message: isEs
      ? 'Su consulta ha sido recibida de forma segura por FidePath Expert Services.'
      : isCa
      ? 'La seva consulta ha estat rebuda de manera segura per FidePath Expert Services.'
      : 'Your enquiry has been securely received by FidePath Expert Services.',
    details: {
      recipient: 'joan.perello@fidepath.com',
      referenceCode,
      createdAt: enquiry.createdAt
    }
  });
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FidePath Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
