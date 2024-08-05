import type { CollectionConfig } from 'payload/types'

const Portfolio: CollectionConfig = {

    slug: 'portfolio',

    admin: {
        useAsTitle: 'projectName'
    },
    
    fields: [

        {
            name: 'projectImages',
            relationTo: 'portfolio',
            type: 'upload'
        },

        {
            name: 'projectName',
            type: 'text'
        }, 
        
        {
            name: 'projectTagline',
            type: 'text'
        },

        {
            name: 'yearCompleted',
            type: 'date'
        },

        {
            name: 'location',
            type: 'text'
        },

        {
            name: 'projectDescription',
            type: 'richText'
        },

        {
            name: 'clientName',
            type: 'text'
        }
    ],

    upload: {
        staticURL: '/media/portfolio',
        staticDir: '/media',
        imageSizes: [
            {
                 name: 'thumbnail',
                 width: 400,
                 height: 300,
                 position: 'centre'
            },
 
            {
                 name: 'card',
                 width: undefined,
                 height: undefined,
                 position: 'centre'
            }
         ],
 
         adminThumbnail: 'thumbnail',
         mimeTypes: ['image/*']
    }

}

export default Portfolio;