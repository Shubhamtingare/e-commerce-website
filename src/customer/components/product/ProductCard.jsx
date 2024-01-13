import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product}) {
    // console.log("product recieved :",product);
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/products/${product?._id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
      
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60' >{product.title}</p>
                <p>{product.brand}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>₹{product.discountedPrice}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountedPercent}% off</p>
            </div>

        </div>
    </div>
  )
}
