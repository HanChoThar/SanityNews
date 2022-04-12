export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Full Name',
      name: 'full_name',
      type: 'string',
      validation: Rule => Rule.required().error('Full name is required')
    },
    {
      title: 'Short bio',
      name: 'short_bio',
      type: 'text',
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
      validation: Rule => Rule.required().error('Avatar is required')
    }
  ]
}