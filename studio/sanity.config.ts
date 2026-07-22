import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import blockContent from './schemas/blockContent'
import post from './schemas/post'
import service from './schemas/service'
import page from './schemas/page'

export default defineConfig({
  name: 'default',
  title: 'Alt i Ild',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [blockContent, post, service, page],
  },
})
