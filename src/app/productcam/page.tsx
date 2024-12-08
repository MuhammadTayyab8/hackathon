import React from 'react'
import Image from 'next/image'
import heroIcon from '../../../public/icon-hero.png'
import hero from '../../../public/shop-hero.png'
import { FaAngleRight } from "react-icons/fa6";
import Qualities from '@/components/Qualities';
import  Asd from "../../../public/Group 165.png"
import Link from 'next/link';



const page = () => {
  return (
    <div>
         <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${hero.src})` }}>

{/* Text Content */}
<div className="absolute inset-0  items-center flex justify-center">
  <div className="text-center text-black justify-center">
     <div className='flex justify-center'> <Image src={heroIcon} alt='hero-icon'/></div>
    <h1 className="text-4xl font-bold">Product Comparison</h1>
    <div className='flex justify-center items-center'>
     <Link href='/'> 
    <p className="mt-4 text-lg flex justify-center items-center text-center gap-3 font-bold">Home <FaAngleRight /> <span className='font-thin'>Product Comparison</span> </p>
    </Link>
    </div>
  </div>
</div>
</div>


{/* body start  */}
<div className='mb-16 text-right'>
<Image src={Asd} alt='asd'/>
</div>
{/* body end  */}




<Qualities/>
    </div>
  )
}

export default page