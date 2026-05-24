import { defineField, defineType } from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Post Title',
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
      name: 'author',
      title: 'Author Name',
      type: 'string',
      initialValue: 'DfOS Content Team',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Alt-Text for Accessibility & Image SEO)',
          validation: (Rule) => Rule.required().warning('Alt text is highly recommended for Image SEO optimization.'),
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Post Body Content',
      type: 'array',
      of: [
        { type: 'block' }, // Standard portable text rich formatting editor
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Image Alt Text' }],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Blog Frequently Asked Questions',
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
