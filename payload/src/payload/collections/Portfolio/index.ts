import type { CollectionConfig } from 'payload/types'

const Portfolio: CollectionConfig = {
  slug: 'portfolio',

  admin: {
    useAsTitle: 'portfolioName',
  },

  fields: [
    {
      name: 'portfolioName',
      type: 'text',
    },
    {
      name: 'portfolioDescription',
      type: 'richText',
    },

    {
      name: 'portfolioSlug',
      type: 'text',
    },
  ],
}

export default Portfolio
