import { CollectionConfig } from 'payload/types';

const Bio: CollectionConfig = {
    slug: 'bio',

    admin: {
        useAsTitle: 'fullName'
    },

    fields: [

        {
            name: 'photo',
            relationTo: 'bio',
            type: 'upload',
            required: false
        },

        {
            name: 'urlSlug',
            type: 'text'
        },

        {
            name: 'fullName',
            type: 'text'

        },

        {
            name: 'professionalTitle',
            type: 'text'

        },

        {
            name: 'education',
            type: 'text'
        },


        {
            name: 'bio',
            type: 'richText'
        },


        {
            name: 'registrations',
            type: 'text'
        },

        {
            name: 'memberships',
            type: 'text'
        },

        {
            name: 'userQuote',
            type: 'text'
        },

        {
            name: 'repsonsiblities',
            type: 'text'
        },

        {
            name: 'yearStarted',
            type: 'number'
        },

        {
            name: 'location',
            type: 'text'
        },
        
        {
            name: 'featuredProjects',
            type: 'relationship',
            relationTo: 'portfolio',
            hasMany: true
        }

    ],

    upload: {
        staticURL: '../../../../public/media/bios',
        staticDir: '../../../../public/media',
        filesRequiredOnCreate: false,
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

export default Bio;