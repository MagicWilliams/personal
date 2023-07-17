import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'oms44667',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: schemaTypes,
})
