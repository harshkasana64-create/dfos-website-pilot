import { defineField, defineType } from 'sanity';

export const seoType = defineType({
  name: 'seo',
  title: 'SEO, GEO & AEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Search engine title (recommended length: 50-60 characters).',
      validation: (Rule) => Rule.max(60).warning('Titles should be under 60 characters for best Google styling.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Search engine description (recommended length: 140-160 characters).',
      validation: (Rule) => Rule.max(160).warning('Descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Canonical URL link to prevent duplicate indexing issues.',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Social sharing card title.',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      description: 'Social sharing card description.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Social sharing card image.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Noindex Toggle',
      type: 'boolean',
      description: 'Hide this page from search engine index listing.',
      initialValue: false,
    }),
    defineField({
      name: 'schemaType',
      title: 'JSON-LD Schema Type',
      type: 'string',
      description: 'Primary structured entity schema for page indexing validation.',
      options: {
        list: [
          { title: 'Homepage (Organization + WebSite)', value: 'Organization' },
          { title: 'Product Page (SoftwareApplication)', value: 'SoftwareApplication' },
          { title: 'Solution / Industry (Service)', value: 'Service' },
          { title: 'Blog Post (BlogPosting)', value: 'BlogPosting' },
          { title: 'Case Study (Article)', value: 'Article' },
          { title: 'Glossary Term (DefinedTerm)', value: 'DefinedTerm' },
          { title: 'Standard Page (WebPage)', value: 'WebPage' },
        ],
      },
      initialValue: 'WebPage',
    }),
    defineField({
      name: 'seoSummary',
      title: 'SEO Summary',
      type: 'text',
      rows: 3,
      description: '40-70 word content summary outlining: what this page is, who it is for, problem it solves, and business outcome.',
      validation: (Rule) =>
        Rule.custom((text) => {
          if (!text) return true;
          const wordCount = text.trim().split(/\s+/).length;
          if (wordCount < 40 || wordCount > 70) {
            return 'SEO Summary must be between 40 and 70 words long.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'aeoAnswerBlock',
      title: 'AEO Direct Answer Block',
      type: 'text',
      rows: 3,
      description: '50-70 word direct, factual response targeting search engine AI answers (AEO). Structure as: "Question: What is [topic]? Answer: [Direct answer]".',
      validation: (Rule) =>
        Rule.custom((text) => {
          if (!text) return true;
          const wordCount = text.trim().split(/\s+/).length;
          if (wordCount < 50 || wordCount > 70) {
            return 'AEO Answer Block must be between 50 and 70 words long.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'targetKeywordCluster',
      title: 'Target Keyword Cluster',
      type: 'string',
      description: 'Primary organic keyword phrase targeted.',
    }),
    defineField({
      name: 'searchIntent',
      title: 'Search Intent Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Informational (e.g. What is mes?)', value: 'informational' },
          { title: 'Commercial (e.g. Df-OS vs MES)', value: 'commercial' },
          { title: 'Solution-aware (e.g. shopfloor automation software)', value: 'solution-aware' },
          { title: 'Product-aware (e.g. Df-OS platform)', value: 'product-aware' },
          { title: 'Industry-specific (e.g. fmcg trace)', value: 'industry-specific' },
          { title: 'Problem-aware (e.g. reduce paper-based workflows)', value: 'problem-aware' },
          { title: 'Transactional (e.g. book demo)', value: 'transactional' },
        ],
      },
    }),
    defineField({
      name: 'lastReviewedDate',
      title: 'Last Reviewed Date',
      type: 'date',
    }),
    defineField({
      name: 'contentOwner',
      title: 'Content Owner Signature',
      type: 'string',
      initialValue: 'DfOS Operations Team',
    }),
  ],
});
