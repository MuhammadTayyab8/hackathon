import React from 'react'
import Image from 'next/image'
import hero from '../../../public/shop-hero.png'
import { FaAngleRight } from "react-icons/fa6";
import Products from '@/components/Products';
import icon1 from '../../../public/filter.png'
import icon2 from '../../../public/icon-2.png'
import icon3 from '../../../public/icon-3.png'
import Qualities from '@/components/Qualities';
import heroIcon from '../../../public/icon-hero.png'
import Link from 'next/link';





const page = () => {
  return (
    <div>
        
        <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${hero.src})` }}>

  {/* Text Content */}
  <div className="absolute inset-0  items-center flex justify-center">
    <div className="text-center text-black justify-center">
       <div className='flex justify-center'> <Image src={heroIcon} alt='hero-icon'/></div>
      <h1 className="text-4xl font-bold">Shop</h1>
      <div className='flex '>

      <Link href='/'><p className="mt-4 text-lg flex justify-center items-center gap-3 font-bold">Home<FaAngleRight /> <span className='font-thin'>Shop</span> </p> </Link>
      </div>
    </div>
  </div>
</div>

{/* below hero start */}
<div className="flex flex-wrap justify-between items-center bg-[#F9F1E7] w-full px-4 md:px-20 py-3 gap-4">
  {/* Left Section */}
  <div className="flex items-center flex-wrap gap-2 md:gap-4">
    {/* Filter */}
    <span className="flex gap-2 items-center">
      <Image src={icon1} alt="icon-1" className='w-5 h-5 sm:w-auto sm:h-auto'/>
      <p className="text-sm md:text-md font-bold">Filter</p>
    </span>

    {/* Icons */}
    <span>
      <Image src={icon2} alt="icon-2" className='w-5 h-5 sm:w-auto sm:h-auto'/>
    </span>
    <span>
      <Image src={icon3} alt="icon-3" className='w-5 h-5 sm:w-auto sm:h-auto'/>
    </span>

    {/* Results Info */}
    <span className="border-l border-black pl-2 sm:pl-4">
      <p className="text-[12px] md:text-base">Showing 1 - 16 of 35 results</p>
    </span>
  </div>

  {/* Right Section */}
  <div className="flex items-center justify-between flex-wrap gap-4 md:gap-5">
    {/* Show Options */}
    <span className="flex gap-2 items-center">
      <p className="font-bold text-sm md:text-base">Show</p>
      <p className="text-[#9F9F9F] bg-white px-4 py-2 md:py-3 text-sm md:text-base">16</p>
    </span>

    {/* Sort Options */}
    <span className="flex gap-2 items-center">
      <p className="font-bold text-sm md:text-base">Sort by</p>
      <p className="text-[#9F9F9F] bg-white px-6 py-2 md:py-3 text-sm md:text-base">Default</p>
    </span>
  </div>
</div>

{/* below hero end */}

<Products/>
<div className='-mt-8 pb-8'><Products/></div>


{/* below products bar start */}

<div className='flex justify-center items-center py-5 gap-4 cursor-pointer pb-8'>
<span className="flex items-center justify-center">
  <p className="text-white bg-[#B88E2F] w-10 h-10 flex items-center justify-center rounded-lg">1</p>
</span>

<span className="flex items-center justify-center">
  <p className="text-black bg-[#F9F1E7] w-10 h-10 flex items-center justify-center rounded-lg">2</p>
</span>

<span className="flex items-center justify-center">
  <p className="text-black bg-[#F9F1E7] w-10 h-10 flex items-center justify-center rounded-lg">3</p>
</span>

<span className="flex items-center justify-center">
  <p className="text-black bg-[#F9F1E7] w-20 h-10 flex items-center justify-center rounded-lg">Next</p>
</span>

</div>

{/* below products bar end */}
{/* quality start */}

<Qualities/>
{/* quality end */}



    </div>
  )
}

export default page