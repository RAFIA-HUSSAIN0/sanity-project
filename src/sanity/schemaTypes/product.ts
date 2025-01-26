
export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'imagePath',
            title: 'Image Path',
            type: 'url',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'discountPercentage',
            title: 'Discount Percentage',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',  // Slug will now be based on the "name" field
            },
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type: 'string',
        },
        {
            name: 'stockLevel',
            title: 'Stock Level',
            type: 'number',
        },
    ],
};