# Frank Sebastián Mena · sitio personal

Sitio web personal de **Frank Sebastián Mena**, estudiante de Derecho en Quibdó (Chocó, Colombia).
Reúne su perfil, su formación, su investigación y un canal de contacto.

> «Traduzco entre el derecho, las comunidades y la tecnología.»

Es un proyecto personal en desarrollo. Todo el contenido proviene de datos verificados (perfil de LinkedIn y publicaciones); el sitio no incluye información de relleno.

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Frase de valor, áreas de trabajo y cargos actuales |
| `/sobre-mi/` | Biografía, experiencia, educación y habilidades |
| `/formacion/` | Programas, certificaciones y cursos (OEA, Harvard, UdeA, U. de Cartagena, UNESCO, ICON·S, SENA, UTCH) |
| `/investigacion/` | Capítulo «¿Quién decide los derechos de la naturaleza?» (Pireo Editorial, 2026), en coautoría con Lisneider Hinestroza Cuesta y Nelsy Moreno Ibargüen |
| `/proyectos/` | Este sitio como caso: problema, alcance y stack |
| `/blog/` | Próximamente (no indexado mientras no haya artículos) |
| `/contacto/` | Formulario que envía el mensaje a tu correo (Web3Forms), con alternativa por WhatsApp |

## Stack

- **Next.js 16** (App Router) con **exportación estática** (`output: "export"`)
- **React 19** y **TypeScript**
- **Tailwind CSS 4**: tokens de diseño en `src/app/globals.css`
- **Framer Motion**: entradas al hacer scroll y transición entre páginas
- **Web3Forms**: envío del formulario de contacto sin servidor
- **next/font**: Fraunces (títulos) e Inter (texto), servidas desde el propio dominio
- Despliegue en **Hostinger** (Apache/LiteSpeed, ver `public/.htaccess`)

`supabase/migrations/` conserva un esquema SQL para una fase futura; el sitio actual no se conecta a Supabase.

## Diseño y accesibilidad

- Fondo blanco, texto casi negro y un solo acento: azul tinta `#1E3A5F` (contraste 11,5:1).
- Contraste WCAG AA o superior en todos los textos, foco visible, HTML semántico y `alt` en las imágenes.
- Móvil primero; revisado a 375, 768, 1024 y 1280 px sin desbordamiento horizontal.
- Respeta `prefers-reduced-motion`: sin desplazamientos animados para quien lo desactiva.

## Contenido: dónde editar

Todo el contenido está en **`src/lib/data.ts`**:

- `profileData`: biografía (Markdown), áreas, experiencia, educación y habilidades.
- `credentialsData`: formación y certificaciones. Añade `credentialUrl` para mostrar «Ver credencial».
- `publicationData`: datos del capítulo, resumen y cita.
- `projectsData` y `blogPostsData`.

Datos de contacto, palabras clave y URL del sitio: **`src/config/site.ts`**. Menú: **`src/config/navigation.ts`**.

### Publicar el PDF del capítulo

Copia el archivo a `public/docs/hinestroza-moreno-mena-2026-derechos-naturaleza.pdf`. El botón «Descargar PDF» aparece automáticamente en el siguiente `npm run build`. La obra tiene licencia CC BY-NC-ND 4.0, que permite redistribuirla citando la fuente.

## Desarrollo local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # genera el sitio estático en out/
```

### Variables de entorno

Se definen en `.env.local` y se incrustan al compilar: después de cambiarlas, reinicia `npm run dev` o vuelve a ejecutar `npm run build`.

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio público (p. ej. `https://tudominio.com`). Se usa en el sitemap, `robots.txt`, las URL canónicas, Open Graph y JSON-LD. Sin ella, se usa `http://localhost:3000`. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Clave de [Web3Forms](https://web3forms.com) para que el formulario envíe los mensajes a tu correo. Es pública por diseño: solo permite enviarte mensajes a ti. Sin ella, el formulario abre el correo o WhatsApp del visitante. |

### Formulario de contacto

1. Entra en [web3forms.com](https://web3forms.com), escribe `frankse1808@gmail.com` y pulsa «Create Access Key». La clave llega a ese correo.
2. Añádela a `.env.local`: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu-clave`.
3. Reinicia `npm run dev` y envía un mensaje de prueba desde `/contacto/`.

El plan gratuito permite 250 envíos al mes. El formulario incluye un campo trampa contra bots y un tiempo límite de 15 s.

## Despliegue en Hostinger

1. Define el dominio y genera el sitio:
   ```bash
   # en .env.local
   NEXT_PUBLIC_SITE_URL=https://tudominio.com
   npm run build
   ```
2. Sube **el contenido** de la carpeta `out/` (no la carpeta) a `public_html/` con el Administrador de archivos o por FTP. Incluye `.htaccess`.
3. Comprueba `https://tudominio.com/`, `/sitemap.xml`, `/robots.txt` y una ruta inexistente (debe mostrar la página 404).

## Estructura

```
src/
├── app/            # Rutas, layout, template (transición), sitemap, robots, iconos
├── components/
│   ├── layout/     # Header, menú móvil y footer
│   ├── sections/   # Bloques de cada página
│   └── ui/         # Botones, tarjetas, Markdown, animaciones (Reveal)
├── config/         # Sitio y navegación
├── lib/            # Datos, SEO (metadatos y JSON-LD) y utilidades
└── types/          # Tipos de TypeScript
public/
├── images/         # Retrato y og-image.png
└── docs/           # PDF del capítulo
```

## Autor

**Frank Sebastián Mena** · Estudiante de Derecho | Derechos humanos y tecnología | Python e IA · Quibdó, Colombia

[LinkedIn](https://www.linkedin.com/in/franksebasti%C3%A1nmena/) · [GitHub](https://github.com/FRANK1808K) · frankse1808@gmail.com
