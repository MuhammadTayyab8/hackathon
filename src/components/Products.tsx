

import Image from 'next/image';
import productImage1 from '../../public/product1.png';
import productImage2 from '../../public/product2.png';
import productImage3 from '../../public/product3.png';
import productImage4 from '../../public/product4.png';
import { FaShare, FaHeart, FaArrowRightArrowLeft  } from "react-icons/fa6";
import Link from 'next/link';



const products = [
  {
    id: 1,
    image: productImage1,
    title: 'Product 1',
    description: 'This is a short description',
    price: 'Rp 2.500.00',
    stock: 'New',
    netTotal: ''
  },
  {
    id: 2,
    image: productImage2,
    title: 'Product 2',
    description: 'This is a short description',
    price: 'Rp 3.500.00',
    stock: '-30%',
    netTotal: 'Rp 5.000.00'
  },
  {
    id: 3,
    image: productImage3,
    title: 'Product 3',
    description: 'This is a short description',
    price: 'Rp 7.500.00',
    stock: 'New',
    netTotal: ''
  },
  {
    id: 4,
    image: productImage4,
    title: 'Product 4',
    description: 'This is a short description',
    price: 'Rp 3.600.00',
    stock: '-40%',
    netTotal: 'Rp 6.000.00'
  },
  {
    id: 5,
    image: productImage3,
    title: 'Product 3',
    description: 'This is a short description',
    price: 'Rp 7.500.00',
    stock: 'New',
    netTotal: ''
  }, 
  {
    id: 6,
    image: productImage1,
    title: 'Product 1',
    description: 'This is a short description',
    price: 'Rp 2.500.00',
    stock: 'New',
    netTotal: ''
  },
  {
    id: 7,
    image: productImage4,
    title: 'Product 4',
    description: 'This is a short description',
    price: 'Rp 3.600.00',
    stock: '-40%',
    netTotal: 'Rp 6.000.00'
  },
  {
    id: 8,
    image: productImage2,
    title: 'Product 2',
    description: 'This is a short description',
    price: 'Rp 3.500.00',
    stock: '-30%',
    netTotal: 'Rp 5.000.00'
  }, 
];

export default function Products() {
  return (
    <div className="px-4 md:px-20">
    {/* Flexbox container */}
    <div className="flex flex-wrap gap-0 mt-8">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-[50%] lg:w-1/4 p-3 group">
          {/* Card */}
          <Link href='/productDetail' >
          <div className="bg-[#F4F5F7] overflow-hidden relative">
            {/* Image */}
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
  
            {/* Stock Badge */}
            <div
              className={`absolute top-2 right-2 w-11 h-11 rounded-full flex items-center justify-center text-white text-xs  
                ${product.stock === 'New' ? 'bg-[#2EC1AC] text-black' : 'bg-[#E97171]'}`}
            >
              {product.stock}
            </div>
  
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
              {/* Add to Cart Button */}
              <button className="bg-white text-[#B88E2F] px-6 py-2 font-semibold hover:bg-slate-50">
                Add to Cart
              </button>
  
              {/* Icon Buttons */}
              <div className="flex gap-4">
                {/* Share */}
                <button className="flex gap-1 items-center text-white">
                  <FaShare className="text-md" />
                  <span className="text-sm">Share</span>
                </button>
                {/* Compare */}

               <Link href='/productcam'><button className="flex gap-1 items-center text-white">
                  <FaArrowRightArrowLeft  className="text-md" />
                  <span className="text-sm">Compare</span>
                </button></Link> 
                {/* Wishlist */}
                <button className="flex gap-1 items-center text-white">
                  <FaHeart className="text-md" />
                  <span className="text-sm">Wishlist</span>
                </button>
              </div>
            </div>
  
            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-[#898989] font-[540] mt-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold mt-2">{product.price}</p>
                <p className="text-md mt-2 line-through text-[#B0B0B0]">{product.netTotal}</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      
      ))}
    </div>
  </div>
  
  );
}
