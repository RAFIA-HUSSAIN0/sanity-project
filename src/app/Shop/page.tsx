'use client'; // This is the Client Component declaration

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import ProductListing from '../components/ProductListing';
import Image from 'next/image';
import Filter from '../components/Filter';
import Payment from '../components/Payment';
import { product } from '../../sanity/schemaTypes/product';
import { addToCart } from '../actions/actions';






const Shop = () => {
  const [product, setProduct] = useState<Product[]>([])
  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct);
    }
    fetchproduct()
  }, []);


  return (
    <div>

      <div>
        <Header />
        <div className="w-full flex justify-center  mx-[30px]">
          <Image src="/images/Bg.png" alt="bg" width={1640} height={316} />
        </div>
        <Filter />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {product.map((product: Product) => (

          <ProductListing product={product} key={product.id} />
        ))}
      </div>
      <div>
        <Payment />
      </div>
    </div>
  );
};


export default Shop;
