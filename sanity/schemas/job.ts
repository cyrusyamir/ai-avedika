import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short key points shown as tags/badges',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order on the Jobs page',
      initialValue: 0,
    }),
    defineField({
      name: 'link',
      title: 'Apply Link',
      type: 'url',
      description: 'External application URL. If empty, Tally form is used.',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'bullets',
              title: 'Bullets',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: { select: { heading: 'heading' } },
        },
      ],
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Unpublished jobs are hidden from the Jobs page',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title', order: 'order', published: 'published' },
    prepare({ title, order, published }) {
      return {
        title,
        subtitle: `Order: ${order} | ${published ? 'Published' : 'Draft'}`,
      }
    },
  },
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
