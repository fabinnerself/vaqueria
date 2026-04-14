# Landing Page - La Vaquería

> **Proyecto Startup CRM - Equipo 11**
> - Repositorio central: [S03-26-Equipo-11-Web-App-Development](https://github.com/No-Country-simulation/S03-26-Equipo-11-Web-App-Development.git)
> - Demo Startup CRM: [startup-crm-equipo-11.vercel.app](https://startup-crm-equipo-11.vercel.app/)
> - Demo Vaquería: [vaqueria.vercel.app](https://vaqueria.vercel.app/)

Landing page para empresa de productos lácteos, desarrollada con Next.js y desplegable en Vercel.

## Funcionalidades

- **Sección Hero**: Presentación principal con imagen y llamada a la acción
- **Productos**: Cards con productos lácteos (leche, quesos, yogur)
- **FAQ**: Preguntas frecuentes colapsables
- **Contacto**: Tres métodos de contacto:
  - **WhatsApp**: QR code para chat directo
  - **Email**: Formulario con validación y envío via API
  - **SMS**: Formulario para contacto por mensaje de texto
- **Footer**: Links a redes sociales y legales

### Características del formulario de email

- Validación de campos requeridos (email, asunto, mensaje)
- Validación de formato de correo electrónico
- Llamada a API `/api/email/send` para envío real
- Loading state mientras se envía
- Mensaje de éxito durante 8 segundos
- Limpieza automática de campos después del envío

## Estructura del Proyecto

```
├── src/
│   └── app/
│       ├── api/
│       │   └── email/
│       │       └── send/
│       │           └── route.ts       # Endpoint API de envío de emails
│       ├── components/
│       │   ├── ContactCards.tsx      # Formularios de contacto
│       │   ├── FAQSection.tsx        # Preguntas frecuentes
│       │   ├── Footer.tsx            # Pie de página
│       │   ├── Header.tsx            # Encabezado
│       │   ├── HeroSection.tsx       # Sección principal
│       │   ├── ProductCards.tsx      # Cards de productos
│       │   └── ui/                   # Componentes de UI (Radix)
│       ├── lib/
│       │   ├── emailService.ts       # Servicio SMTP con nodemailer
│       │   └── validate.ts           # Validación de payload
│       ├── styles/
│       │   ├── index.css             # Estilos principales
│       │   └── tailwind.css          # Configuración Tailwind
│       ├── types/
│       │   └── email.ts              # Tipos TypeScript para emails
│       ├── App.tsx                   # Componente principal
│       ├── layout.tsx                # Layout raíz de Next.js
│       └── page.tsx                  # Página principal
├── .env                              # Variables de entorno (no commitear al repo)
├── next.config.mjs                   # Configuración de Next.js
├── package.json                      # Dependencias del proyecto
└── tsconfig.json                     # Configuración de TypeScript
```

## Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# Puerto del servidor
PORT=3000

# Configuración SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password
FROM_EMAIL=tu_correo@gmail.com
FROM_NAME=Nombre del Remitente
```


### 3. Ejecutar en desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

### 4. Construir para producción

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno en el Dashboard de Vercel:
   - `PORT` (opcional, default 3000)
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `FROM_EMAIL`
   - `FROM_NAME`
3. Hacer deploy automáticamente con cada push

## API Endpoint

### POST /api/email/send

Envía un correo electrónico mediante SMTP.

**Request:**

```json
{
  "to": "destinatario@ejemplo.com",
  "subject": "Asunto del email",
  "text": "Cuerpo del mensaje"
}
```

**Response:**

```json
{
  "status": "sent",
  "provider": "smtp",
  "messageId": "<abc123@smtp.gmail.com>"
}
```

## Tecnologías

- **Framework**: Next.js 16
- **UI**: React 18, Tailwind CSS 4
- **Componentes**: Radix UI
- **Email**: Nodemailer
- **Despliegue**: Vercel

## Notas

- El formulario de WhatsApp abre directamente la app de WhatsApp
- El formulario de SMS es visual (no envía SMS reales)
- El formulario de email está conectado a la API y envía correos reales
- Los iconos del footer son de color verde primario (#4e8b2f)
