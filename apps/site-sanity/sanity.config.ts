import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {sanitySchemaTypes, translatedSanitySchemaTypes} from 'content-models'
import {documentInternationalization} from '@sanity/document-internationalization'
import {netlifyTool} from 'sanity-plugin-netlify'

export default defineConfig({
  name: 'default',
  title: 'space-madness',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    netlifyTool(),
    codeInput(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'},
      ],
      schemaTypes: translatedSanitySchemaTypes,
    }),
  ],

  schema: {
    types: sanitySchemaTypes,
  },
})
