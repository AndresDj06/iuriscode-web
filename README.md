# IurisCode

**Derecho · Tecnología · Innovación**

Sitio web y portafolio profesional de **IurisCode**, una propuesta LegalTech que une el derecho con la tecnología: investigación jurídica, inteligencia artificial aplicada al derecho, protección de datos y transformación digital.

🌐 **Demo en producción:** [iuriscode.vercel.app](https://iuriscode.vercel.app)

## ✨ Qué incluye

| Sección | Descripción |
|---|---|
| **Inicio** | Presentación, propuesta de valor, trabajo destacado y cifras |
| **Sobre mí** | Perfil profesional y enlaces de contacto |
| **Investigación** | Publicaciones: artículos, capítulos, tesis y ponencias |
| **Proyectos** | Proyectos con estado, tecnologías y enlaces |
| **Eventos** | Congresos, conferencias y seminarios con mi rol (ponente, panelista...) |
| **Blog** | Artículos con páginas individuales por `slug` |
| **Contacto** | Formulario con protección anti-spam |

Además: SEO con `sitemap` y `robots` generados, diseño responsive con estilo *glassmorphism* y animaciones de entrada.

## 🛠️ Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) y **React 19**
- **TypeScript**
- **Tailwind CSS 4** para estilos
- **Framer Motion** para animaciones
- **Supabase** (PostgreSQL) como base de datos
- **Resend** para el envío de correos del formulario
- **Cloudflare Turnstile** contra spam
- **Vercel** para el despliegue

## 🗄️ Base de datos

El esquema está en [`supabase/migrations/001_initial_schema.sql`](supabase/migrations/001_initial_schema.sql) e incluye las tablas `publications`, `projects`, `events` y `blog_posts`. Cada una tiene el campo `published` para controlar qué contenido es público.

## 🚀 Ejecutarlo en local

Requisitos: Node.js 20 o superior.

```bash
# 1. Clonar e instalar
git clone https://github.com/FRANK1808K/iuriscode-web.git
cd iuriscode-web
npm install

# 2. Variables de entorno
cp .env.example .env.local
# Completa los valores (ver tabla abajo)

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Para qué sirve |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Conexión a Supabase |
| `RESEND_API_KEY` / `CONTACT_EMAIL` | Envío de correos del formulario |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Verificación anti-spam |
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio |

### Scripts

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # revisar el código con ESLint
```

## 📁 Estructura

```
src/
├── app/          # Rutas (inicio, blog, proyectos, investigación, eventos, contacto)
├── components/   # layout, secciones de la home y componentes UI reutilizables
├── config/       # Configuración del sitio y navegación
├── lib/          # Datos, utilidades y cliente de Supabase
└── types/        # Tipos de TypeScript
supabase/
└── migrations/   # Esquema SQL
```

## 👤 Autor

**Frank Sebastián Mena** · Estudiante de Derecho, programación, datos e IA · Quibdó, Colombia

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franksebasti%C3%A1nmena/)
