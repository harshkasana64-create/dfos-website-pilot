import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dfos.io';

  // Base routes structure for Df-OS website - dynamic schemas (Sanity CMS) will be appended later
  const routes = [
    '',
    '/products/df-os',
    '/products/vish-ai',
    '/products/x-konnect',
    '/solutions',
    '/solutions/factory-control-tower',
    '/solutions/traceability',
    '/solutions/quality-management',
    '/solutions/safety-ehs',
    '/solutions/maintenance-cmms',
    '/solutions/performance-monitoring',
    '/solutions/esg-sustainability',
    '/industries',
    '/industries/fmcg',
    '/industries/pharma',
    '/industries/chemicals',
    '/industries/automotive',
    '/resources',
    '/resources/blog',
    '/case-studies',
    '/glossary',
    '/about',
    '/partners',
    '/security',
    '/careers',
    '/contact',
    '/book-demo',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
