import { client } from '@/sanity/lib/client'
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// SanityImageSource type ko import karna


// Product type definition
type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: SanityImageSource; // Sanity image type
    slug: string;
    stockLevel: number;
};

const page = async ({ params }: { params: { id: string } }) => {
    // Sanity query updated with _id field
    const query = `*[_type == 'product' && _id == $id]{
        name,
        price,
        description,
        category,
        image,
        "slug": slug.current,
        "id": _id,
        stockLevel
    }[0]`;

    // Fetching the product data
    const products: Product | null = await client.fetch(query, { id: params.id });

    if (!products) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto px4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div key={products.id}
                    className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 '
                >
                    {/* Empty div as placeholder for product details */}
                </div>

                <div className='flex gap-8 m-6'>
                    <li className='font-bold'>Product Name: </li>
                    <li className='font-medium'>{products.name}</li>
                </div>
                <div className='aspect-square border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
                    {products.image && (
                        <Image
                            src={urlFor(products.image).url()}
                            alt={products.name || "Product Image"}
                            width={400}
                            height={800}
                            className='w-full h-[600px] object-cover rounded-md'
                        />
                    )}
                </div>
                <div>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Description: </li>
                        <li className='font-medium'>{products.description}</li>
                    </ul>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Price: </li>
                        <li className='font-medium'>{products.price}</li>
                    </ul>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Slug: </li>
                        <li className='font-medium'>{products.slug}</li>
                    </ul>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Stock Level: </li>
                        <li className='font-medium'>{products.stockLevel}</li>
                    </ul>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Category: </li>
                        <li className='font-medium'>{products.category}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;