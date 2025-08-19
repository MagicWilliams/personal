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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
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
      name: 'mobileMedia',
      type: 'array',
      title: 'Mobile Media',
      of: [{type: 'image'}, {type: 'file'}],
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Make Visible on Site?',
    },
  ],
}
