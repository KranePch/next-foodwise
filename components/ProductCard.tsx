import { Product } from '@/types'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className='product-card'> 
      <div className='product-card_img-container'>
        <Image 
        src={product.image} 
        alt={product.foodName}
        width={200}
        height={200}
        className='product-card_image'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='product-title'>{product.foodName}</h3>

        <div className='flex justify-between'>

          <p className='text-black opacity-50 text-lg capitalize'>
            {product.categoriesArray[0]}
          </p>

          <p className='text-black text-lg font-semibold'>
            <span>{product.quantity}</span>
            <span>{product.gradeNutrition}</span>
          </p>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard