
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
    imagePath: string; // Image source
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

const page = async ({ params: { id } }: PageProps) => {
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

    const products: Product | null = await client.fetch(query, { id });

    if (!products) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div key={products.id} className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
                    {/* Product Image Section */}
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

                {/* Product Details Section */}
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
                        <li className='font-semibold'>Product Type: </li>
                        <li className='font-medium'>{products._type}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product Slug: </li>
                        <li className='font-medium'>{products.slug?.current}</li>
                    </ul>

                    <ul className='flex gap-8 m-6'>
                        <li className='font-semibold'>Product stock level: </li>
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
