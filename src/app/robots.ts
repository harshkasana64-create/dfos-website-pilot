import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dfos.io';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/draft/', '/preview/', '/test/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
