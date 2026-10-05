import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { publicationsData, projectsData, blogPostsData } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/sobre-mi',
    '/investigacion',
    '/proyectos',
    '/eventos',
    '/blog',
    '/contacto',
  ].map((route) => ({
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Rutas dinámicas de publicaciones
  const publicationRoutes = publicationsData.map((pub) => ({
    url: `${baseUrl}/investigacion/${pub.slug}/`,
    lastModified: new Date(pub.updatedAt || pub.publicationDate).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Rutas dinámicas de proyectos
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}/`,
    lastModified: new Date(project.updatedAt || project.startDate).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Rutas dinámicas de blog
  const blogRoutes = blogPostsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...publicationRoutes, ...projectRoutes, ...blogRoutes];
}
