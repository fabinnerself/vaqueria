# Vaqueria lacteos - Proyecto React + Tailwind CSS

## 📋 Descripción

Aplicación web pixel perfect desarrollada con React y Tailwind CSS, basada en diseños de Figma. Incluye una landing page y un sistema de autenticación con navegación entre páginas.

## 🏗️ Estructura del Proyecto

```
src/app/
├── App.tsx                 # Componente principal con manejo de navegación
├── pages/
│   ├── LandingPage.tsx    # Página principal (home)
│   ├── LoginPage.tsx      # Página de inicio de sesión
│   └── RegisterPage.tsx   # Página de registro
└── components/
    ├── Header.tsx         # Header para landing (fondo blanco)
    ├── Footer.tsx         # Footer para landing
    ├── LoginHeader.tsx    # Header para login/registro (fondo verde)
    ├── LoginFooter.tsx    # Footer para login/registro
    ├── LoginForm.tsx      # Formulario de login
    ├── RegisterForm.tsx   # Formulario de registro
    ├── HeroSection.tsx    # Sección hero de landing
    ├── ContactCards.tsx   # Tarjetas de contacto (WhatsApp, Email, SMS)
    ├── ProductCards.tsx   # Tarjetas de productos (Leche, Queso, Yogur)
    └── FAQSection.tsx     # Sección de preguntas frecuentes
```

## 🎨 Convenciones de Nomenclatura

Según las guías del proyecto:

1. **btn\_** → Botones (primary, secondary, tertiary)
2. **card\_** → Tarjetas de contenido
3. **link\_** → Enlaces internos a secciones
4. **faq\_** → Elementos de FAQ
5. **img\_** → Imágenes
6. **drag_drop** → Input drag & drop para archivos
7. **text\_** → Inputs de texto
8. **txt\_** → Campos de texto o password
9. **combobox\_** → Inputs tipo combobox

## 🚀 Funcionalidades

### Landing Page

- **Hero Section**: Mensaje principal con CTAs
- **Tarjetas de Contacto**:
  - WhatsApp con QR code
  - Formulario de Email
  - Formulario de SMS
- **Tarjetas de Productos**: Leche, Queso, Yogur
- **FAQ**: Preguntas frecuentes expandibles

### Login Page

- **Formulario de Login**: Email y contraseña
- **Validación**: Mensajes de error
- **Enlaces**: Registro y volver al inicio
- **Header verde**: Diferente al de landing
- **Footer**: Con enlaces a secciones de landing

### Register Page

- **Formulario de Registro**: Nombre, email y contraseña
- **Validación en tiempo real**: Check verde cuando el nombre es válido
- **Mensaje de éxito**: Banner verde al crear cuenta
- **Enlaces**: Login y volver al inicio
- **Header verde**: Mismo que login pero con botón "Login"
- **Footer**: Con enlaces a secciones de landing

## 🎯 Navegación

El sistema de navegación funciona así:

1. **En Landing Page**: Scroll suave a secciones
2. **Botón "Login"**: Navega a página de login
3. **Botón "Registrarse"**: Navega a página de registro
4. **"Volver al inicio"**: Regresa a landing page
5. **Enlaces del header/footer en login/registro**: Regresan a landing y scroll a sección
6. **En registro, botón "Login"**: Navega a página de login
7. **En login, botón "Registrarse"**: Navega a página de registro

## 📱 Responsive Design

- **Mobile First**: Diseñado para funcionar en todos los dispositivos
- **Breakpoints**:
  - `sm:` - 640px
  - `md:` - 768px
  - `lg:` - 1024px
- **Menú móvil**: Hamburger menu para pantallas pequeñas

## 🎨 Colores Principales

- **Verde Primario**: `#4e8b2f` (Landing)
- **Verde Login**: `#1e8449` (Login)
- **Texto Primario**: `#222`
- **Texto Secundario**: `#5f6d7e`
- **Error**: `#e03e3e`
- **Fondo**: `#f3f7fb` / `#f7f7f7`

## 🖼️ Imágenes

Las imágenes se importan usando el esquema especial `figma:asset`:

```tsx
import imgLogo from "figma:asset/[hash].png";
```

**Importante**: NO usar rutas relativas con `figma:asset`, siempre usar directamente:

```tsx
// ✅ Correcto
import img from "figma:asset/abc123.png";

// ❌ Incorrecto
import img from "../imports/figma:asset/abc123.png";
```

## 🔧 Componentes Reutilizables

### Header y Footer

Ambos componentes aceptan un prop `onNavigate` para manejar la navegación:

```tsx
<Header onNavigate={handleNavigation} />
<Footer onNavigate={handleNavigation} />
```

### Formularios

Todos los inputs tienen:

- Validación
- Estados de error
- Focus states
- Placeholder text
- Responsive sizing

## ✨ Características Especiales

1. **Smooth Scroll**: Navegación suave entre secciones
2. **FAQ Expandible**: Accordion con animaciones
3. **Validación de Formularios**: Mensajes de error en tiempo real
4. **Sticky Header**: Header fijo al hacer scroll
5. **Hover Effects**: En botones y enlaces
6. **Custom Scrollbar**: Barra de desplazamiento personalizada

## 🎓 Próximos Pasos

- [x] Página de registro completa
- [ ] Integración con backend/API
- [ ] Autenticación real con JWT
- [ ] Páginas de productos individuales
- [ ] Dashboard de usuario
- [ ] Reset de contraseña
- [ ] Verificación de email

## 📝 Notas

- El proyecto usa **Tailwind CSS v4**
- Fuente: **Roboto** (400, 500, 600, 700, 800, 900)
- Scroll behavior configurado globalmente
- Todos los componentes son pixel perfect según diseño de Figma
