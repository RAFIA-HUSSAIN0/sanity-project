import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from "../env"

export const client = createClient({
  projectId: 'mp6smxzm',
  dataset: 'production',
  apiVersion: '2025-01-14',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN,
})
