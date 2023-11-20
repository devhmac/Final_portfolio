export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'order',
            title: 'Order Number',
            type: 'number',
        }
    ],
    orderings: [
        {
            title: 'Order Number',
            name: 'order',
            by: [
                { field: 'order', direction: 'desc' }
            ]
        }]
}