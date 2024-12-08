'use client'; // This makes the component a Client Component

import React from 'react'
import Image from 'next/image'
import hero from '../../../public/shop-hero.png'
import heroIcon from '../../../public/icon-hero.png'
import { FaAngleRight, FaTrashCan  } from "react-icons/fa6";
import Qualities from '@/components/Qualities';
import { useState } from 'react';
import productImage1 from '../../../public/product1.png';
import productImage2 from '../../../public/product2.png';
import Link from 'next/link';



const page = () => {

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDelete = () => {
    // Logic to remove item from cart
    console.log('Item deleted');
  };

  return (
    <div>
        
        <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${hero.src})` }}>

{/* Text Content */}
<div className="absolute inset-0  items-center flex justify-center">
  <div className="text-center text-black justify-center">
     <div className='flex justify-center'> <Image src={heroIcon} alt='hero-icon'/></div>
    <h1 className="text-4xl font-bold">Cart</h1>
    <div className='flex '>
      <Link href='/'>
    <p className="mt-4 text-lg flex justify-center items-center gap-3 font-bold">Home <FaAngleRight /> <span className='font-thin'>Cart</span> </p>
    </Link>
    </div>
  </div>
</div>
</div>


{/* cart start  */}

<div className="flex flex-wrap md:flex-nowrap gap-8 px-4 sm:px-20 py-8">
  {/* Left Side - Cart Details */}
  <div className="w-full md:w-[80%] space-y-6">
    {/* Bar */}
    <div className="hidden sm:flex justify-between bg-[#F9F1E7] py-3 px-28 font-semibold text-black">
      <p>Products</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>

{/* Cart Items */}
<div className="space-y-6">
  {[1, 2].map((_, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4 last:border-b-0 sm:space-x-4 sm:space-y-0 space-y-4"
    >
      {/* Product Image */}
      <div className="w-3/4 sm:w-1/6 flex justify-center">
        <Image
          src={productImage1}
          alt="Product"
          className="w-full h-20 object-cover rounded-md"
        />
      </div>

      {/* Product Info */}
      <div className="flex gap-3 flex-col sm:flex-row text-center sm:text-left sm:items-center w-full sm:w-2/5 space-y-2 sm:space-y-0">
        <p className="font-medium text-black">{`Asgaard Sofa`}</p>
        <p className="text-sm text-gray-500">{`RS. 25,000.00`}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-center sm:w-1/5 w-full sm:w-auto gap-2">
        <button
          onClick={() => console.log('Decrease Quantity')}
          className="px-2 py-1 bg-white border border-gray-300 rounded-md"
        >
          -
        </button>
        <div className="flex items-center justify-center">
  <input
    type="number"
    value="1"
    min="1"
    className="w-8 text-center py-1 border border-gray-300 rounded-md"
  />
</div>
        <button
          onClick={() => console.log('Increase Quantity')}
          className="px-2 py-1 bg-white border border-gray-300 rounded-md"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex sm:text-left w-full sm:w-auto">
        <p className="font-semibold text-gray-700 text-sm">RS. 25,000</p>
      </div>

      {/* Delete Icon */}
      <div className="flex justify-center sm:w-1/6 w-full sm:w-auto">
        <button
          onClick={() => console.log('Delete Product')}
          className="text-[#B88E2F] hover:text-red-600"
        >
          <FaTrashCan />
        </button>
      </div>
    </div>
  ))}
</div>



  </div>

  {/* Right Side - Cart Total */}
  <div className="w-full md:w-5/12 bg-[#F9F1E7] p-10 px-14">
    <h1 className="text-2xl font-bold text-black mb-6 text-center">
      Cart Totals
    </h1>
    <div className="space-y-4">
      <div className="flex justify-between">
        <p className="text-black font-bold">Subtotal</p>
        <p className="font-medium text-[#9F9F9F]">RS. 25,000.00</p>
      </div>

      <div className="flex justify-between">
        <p className="text-black font-bold">Total</p>
        <p className="text-lg font-bold text-[#B88E2F]">RS. 25,000.00</p>
      </div>
    </div>
    
   <Link href='/checkout'> <button className="w-full mt-6 border-2 border-black text-black py-3 rounded-md font-semibold transition">
      Checkout
    </button></Link>
  </div>
</div>
{/* cart end */}


<Qualities/>

    </div>
  )
}

export default page