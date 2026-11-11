import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'legalDoc',
  title: 'Legal Document',
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
      name: 'type',
      title: 'Document Type',
      type: 'string',
      options: {
        list: [
          { title: 'Terms & Conditions', value: 'terms' },
          { title: 'Privacy Policy', value: 'privacy' },
          { title: 'NDA', value: 'nda' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title', type: 'type', published: 'published' },
    prepare({ title, type, published }) {
      return {
        title,
        subtitle: `${type} | ${published ? 'Published' : 'Draft'}`,
      }
    },
  },
})
