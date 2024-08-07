import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
// import { Archive } from '../../blocks/ArchiveBlock'
// import { CallToAction } from '../../blocks/CallToAction'
// import { Content } from '../../blocks/Content'
// import { MediaBlock } from '../../blocks/MediaBlock'
// import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
// import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
// import { populatePublishedAt } from '../../hooks/populatePublishedAt'
// import { revalidateProject } from './hooks/revalidateProject'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'projectName',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },

  upload: {
    staticDir: path.resolve('../../../../media'),
    filesRequiredOnCreate: false,
  },
  // hooks: {
  //   beforeChange: [populatePublishedAt],
  //   afterChange: [revalidateProject],
  //   afterRead: [populateArchiveBlock],
  // },
  // versions: {
  //   drafts: true,
  // },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       label: 'Hero',
    //       fields: [hero],
    //     },
    //     {
    //       label: 'Content',
    //       fields: [
    //         {
    //           name: 'layout',
    //           type: 'blocks',
    //           required: true,
    //           blocks: [CallToAction, Content, MediaBlock, Archive],
    //         },
    //       ],
    //     },
    //   ],
    // },
    //   {
    //     name: 'projectImages',
    //     relationTo: 'portfolio',
    //     type: 'upload'
    // },

    // {
    //     name: 'projectName',
    //     type: 'text'
    // },

    {
      name: 'projectTagline',
      type: 'text',
    },

    {
      name: 'yearCompleted',
      type: 'date',
    },

    {
      name: 'location',
      type: 'text',
    },

    {
      name: 'projectDescription',
      type: 'richText',
    },

    {
      name: 'clientName',
      type: 'text',
    },
    {
      name: 'projectType',
      type: 'relationship',
      relationTo: 'portfolio',
      hasMany: true,
    },
    // {
    //   name: 'relatedPortfolio',
    //   type: 'relationship',
    //   relationTo: 'portfolio',
    //   hasMany: true,
    //   // filterOptions: ({ id }) => {
    //   //   return {
    //   //     id: {
    //   //       not_in: [id],
    //   //     },
    //   //   }
    //   // },
    // },
    slugField(),
  ],
}
