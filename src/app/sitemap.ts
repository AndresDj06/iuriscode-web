import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { footerItems } from '@/config/navigation';
import { blogPostsData } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const hasPosts = blogPostsData.length > 0;

  // El blog solo se indexa cuando tenga artículos reales.
  return footerItems
    .filter((item) => item.href !== '/blog' || hasPosts)
    .map((item) => ({
      url: item.href === '/' ? `${baseUrl}/` : `${baseUrl}${item.href}/`,
      changeFrequency: 'monthly' as const,
      priority: item.href === '/' ? 1 : 0.8,
    }));
}
