import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Product Subheading',
      type: 'string',
      description: 'Quick core definition. (e.g. "AI-ready foundation for connected execution layer")',
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Mockup / Visual Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'capabilities',
      title: 'Key Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Capability Details',
          fields: [
            defineField({ name: 'name', title: 'Capability Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'icon', title: 'Lucide Icon Name', type: 'string', description: 'Lucide React icon keyword' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'businessOutcomes',
      title: 'Business Outcomes & Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Outcome Metric',
          fields: [
            defineField({ name: 'metricValue', title: 'Metric Value (e.g., +25% or <10min)', type: 'string' }),
            defineField({ name: 'metricLabel', title: 'Metric Label', type: 'string' }),
            defineField({ name: 'description', title: 'Brief Description', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Product Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'FAQ Mappings',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
            defineField({ name: 'includeInSchema', title: 'Include in FAQSchema', type: 'boolean', initialValue: true }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'Dynamic meta values and AEO response controls.',
    }),
  ],
});
