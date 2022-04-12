export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => [
        Rule.required().min(10).error('title is required and must be at least 10 characters'),
        Rule.required().max(50).warning('It is better to only use 50 characters')
      ]
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule => Rule.required().error('Author is required')
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      validation: Rule => Rule.max(120).error('Excerpt must be less than 120 characters long')
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
      validation: Rule => Rule.required().error('Content is required')
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required().error('Image is required')
    }
  ]
}