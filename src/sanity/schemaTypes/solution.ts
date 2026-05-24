import { defineField, defineType } from 'sanity';

export const solutionType = defineType({
  name: 'solution',
  title: 'Solution Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Solution Title',
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
      name: 'painPoints',
      title: 'Pain Points Addressed',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Typical operational pain points manufacturers face in this area.',
    }),
    defineField({
      name: 'processGaps',
      title: 'Current Shopfloor Process Gaps',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Paper-based or legacy MES system gaps addressed.',
    }),
    defineField({
      name: 'workflowSteps',
      title: 'Df-OS Digitized Workflow Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Workflow Step Details',
          fields: [
            defineField({ name: 'stepNumber', title: 'Step Order Number', type: 'number' }),
            defineField({ name: 'stepTitle', title: 'Step Action Title', type: 'string' }),
            defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
            defineField({ name: 'icon', title: 'Lucide Icon Name', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'visibilityFeatures',
      title: 'Operational Visibility Enhancements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Analytics, alerts, and dashboards unlocked by this solution.',
    }),
    defineField({
      name: 'businessOutcomes',
      title: 'Expected Business Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Outcome Metric',
          fields: [
            defineField({ name: 'metricValue', title: 'Target Metric (e.g. -40%)', type: 'string' }),
            defineField({ name: 'metricLabel', title: 'Label (e.g. Downtime reduction)', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Solution Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'FAQ details',
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
