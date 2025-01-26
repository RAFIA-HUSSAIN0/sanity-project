// app/Product/[id]/page.tsx

import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    category: string;
    stockLevel: number;
    discountPercentage: number;
    imagePath: string;
    _type: "product";

    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };

    slug: {
        _type: "slug";
        current: string;
    };
}

interface PageProps {
    params: {
        id: string;
    };
}

// Using an async function inside the component to fetch data
const ProductPage = async ({ params }: PageProps) => {
    const query = `*[_type == 'product' && id == $id]{
        name,
        price,
        description,
        category,
        image,
        slug,
        stockLevel,
        discountPercentage,
        _type
    }[0]`;

    const product: Product | null = await client.fetch(query, { id: params.id });

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
                    {/* Product Image Section */}
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name || "Product Image"}
                            width={400}
                            height={800}
                            className='w-full h-[600px] object-cover rounded-md'
                        />
                    )}
                </div>

                <div className='flex gap-8 m-6'>
                    <li className='font-bold'>Product Name: </li>
                    <li className='font-medium'>{product.name}</li>
                </div>

                <div>
                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Description: </li>
                        <li className='font-medium'>{product.description}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Price: </li>
                        <li className='font-medium'>{product.price}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Type: </li>
                        <li className='font-medium'>{product._type}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Slug: </li>
                        <li className='font-medium'>{product.slug?.current}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product stock level: </li>
                        <li className='font-medium'>{product.stockLevel}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Category: </li>
                        <li className='font-medium'>{product.category}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
