export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'content',
    },
    {
      name: 'date',
      type: 'string',
      title: 'Release Date',
    },
    {
      name: 'media',
      type: 'array',
      title: 'Media',
      of: [{type: 'image'}, {type: 'file'}],
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Make Visible on Site?',
    },
  ],
}
