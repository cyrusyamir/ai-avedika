import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import job from './schemas/job'
import project from './schemas/project'
import legalDoc from './schemas/legalDoc'
import blogPost from './schemas/blogPost'

export default defineConfig({
  name: 'default',
  title: 'KAYITS & Co. CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: [job, project, legalDoc, blogPost],
  },
})
