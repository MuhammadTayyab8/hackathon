'use client'
import { FaAngleRight, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import productImage1 from '../../../public/product1.png';
import productImage2 from '../../../public/product2.png';
import productImage3 from '../../../public/product3.png';
import productImage4 from '../../../public/product4.png';
import productDetail from '../../../public/product-detail.png'
import Products from '@/components/Products';
import Link from 'next/link';

const ProductDetailPage = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: { target: { value: string; }; }) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else {
            setQuantity(1); // Prevent negative or invalid inputs
        }
    };

    return (
        <div>
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-4 bg-[#F9F1E7] px-4 sm:px-20 py-5 pt-[90px] cursor-pointer">
                <Link href='/'><p className="text-[#9F9F9F]">Home</p></Link>
                <FaAngleRight />
                <Link href='/shop'><p className="text-[#9F9F9F]">Shop</p></Link>
                <FaAngleRight />
                <p>Asgaard Sofa</p>
            </div>

            {/* Product Detail Section */}
            <div className="px-4 md:px-20 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - Images */}
                    <div className="space-y-4">

                        <div className='grid sm:flex gap-4 sm:flex-row-reverse'>
                            <div>
                                <Image
                                    src={productImage1}
                                    alt="Product Image 1"
                                    className="w-[full] h-[300px] sm:h-[500px] object-cover rounded-xl"
                                    width={550}
                                    height={1300}
                                />
                            </div>

                            <div className="flex sm:flex-col gap-4">
                                {/* Small Image 1 */}
                                <Image
                                    src={productImage2}
                                    alt="Product Image 1"
                                    className="sm:w-[full] w-[85px] h-auto sm:h-auto object-cover rounded-md"
                                    width={120}
                                    height={120}
                                />

                                <Image
                                    src={productImage3}
                                    alt="Product Image 1"
                                    className="sm:w-[full] w-[85px] h-auto sm:h-auto object-cover rounded-md"
                                    width={120}
                                    height={120}
                                />

                                <Image
                                    src={productImage1}
                                    alt="Product Image 1"
                                    className="sm:w-[full] w-[85px] h-auto sm:h-auto object-cover rounded-md"
                                    width={120}
                                    height={120}
                                />

                            </div>



                        </div>
                    </div>


                    {/* Right Side - Product Details */}
                    <div className="space-y-6">
                        {/* Product Title and Price */}
                        <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
                        <h3 className="text-2xl font-bold text-[#B88E2F]">RS 25,000.00</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <p className="text-sm text-gray-600">(10 customer reviews)</p>
                        </div>

                        {/* Product Description */}
                        <p className="text-lg text-gray-700">
                            The Asgaard sofa is crafted with the finest materials to provide comfort and style. Ideal for modern living spaces, this sofa combines luxury with functionality.
                        </p>

                        {/* Size Options */}
                        <div>
                            <h5 className="font-semibold text-lg">Size</h5>
                            <div className="flex gap-4 mt-2">
                                <button className="bg-[#B88E2F] py-2 px-4 text-white font-medium rounded-md">XL</button>
                                <button className="bg-[#F9F1E7] py-2 px-4 text-black font-medium rounded-md">L</button>
                                <button className="bg-[#F9F1E7] py-2 px-4 text-black font-medium rounded-md">XS</button>
                            </div>
                        </div>

                        {/* Color Options */}
                        <div>
                            <h5 className="font-semibold text-lg">Color</h5>
                            <div className="flex gap-4 mt-2">
                                <button className="w-8 h-8 rounded-full bg-red-500"></button>
                                <button className="w-8 h-8 rounded-full bg-blue-500"></button>
                                <button className="w-8 h-8 rounded-full bg-green-500"></button>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="grid gap-2 sm:flex justify-center sm:justify-between items-center sm:gap-4 mt-6">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-black rounded-md w-full h-12">
                                <button
                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                    className="w-12 h-full text-black hover:bg-gray-100 flex justify-center items-center"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    onChange={handleQuantityChange}
                                    className="w-16 h-full text-center outline-none border-none appearance-none [-moz-appearance:none] [-webkit-appearance:none]"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-12 h-full text-black hover:bg-gray-100 flex justify-center items-center"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="h-12 px-4 text-black border border-black rounded-md w-full hover:bg-gray-100">
                                Add to Cart
                            </button>

                            {/* Compare Button */}
                            <button className="h-12 px-4 text-black border border-black rounded-md w-full hover:bg-gray-100">
                                + Compare
                            </button>
                        </div>


                        {/* Border and Additional Info */}
                        <div className="border-b-2 my-6"></div>

                        {/* SKU, Category, Tags, and Share */}
                        <div className="space-y-4 w-80 ">
                            {/* SKU */}
                            <p className="flex items-center">
                                <strong className="w-24 text-gray-700">SKU:</strong>
                                <span className="text-gray-600">5501</span>
                            </p>

                            {/* Category */}
                            <p className="flex items-center">
                                <strong className="w-24 text-gray-700">Category:</strong>
                                <span className="text-gray-600">Sofa</span>
                            </p>

                            {/* Tags */}
                            <p className="flex items-center">
                                <strong className="w-24 text-gray-700">Tags:</strong>
                                <span className="text-gray-600">Sofa, Chair, Home</span>
                            </p>

                            {/* Social */}
                            <p className="flex items-center">
                                <strong className="w-24 text-gray-700">Social:</strong>
                                <div className="flex gap-3">
                                    <FaFacebookF className="text-xl text-gray-500 hover:text-blue-600 transition cursor-pointer" />
                                    <FaTwitter className="text-xl text-gray-500 hover:text-blue-400 transition cursor-pointer" />
                                    <FaInstagram className="text-xl text-gray-500 hover:text-pink-500 transition cursor-pointer" />
                                </div>
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="py-8 border-t border-gray-300">
  {/* Headings */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6">
    <h2 className="text-md sm:text-lg font-bold text-black cursor-pointer hover:text-bold transition">
    Description
    </h2>
    <h2 className="text-md sm:text-lg font-medium text-[#9F9F9F] cursor-pointer hover:text-bold transition">
    Additional Information
    </h2>
    <h2 className="text-md sm:text-lg font-medium text-[#9F9F9F] cursor-pointer hover:text-bold transition">
      Reviews (5)
    </h2>
  </div>

  {/* Content */}
  <div className="space-y-6 px-4 sm:px-20">
    {/* Product Description */}
    <p className="text-gray-600 text-justify leading-relaxed">
      The Asgaard sofa combines timeless style with luxurious comfort. Crafted
      using premium materials, it is perfect for modern living spaces. The
      sleek design ensures that it complements a variety of home interiors,
      while the sturdy construction guarantees long-lasting durability. Whether
      you’re entertaining guests or enjoying a cozy evening, the Asgaard sofa
      provides the perfect setting. Elevate your living space with this blend
      of elegance and functionality.
    </p>

    {/* Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <Image
          src={productDetail}
          alt="Product Detail 1"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div>
        <Image
          src={productDetail}
          alt="Product Detail 2"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>

  {/* Bottom Border */}
  <div className="mt-8 border-b border-gray-300"></div>
</div>

<Products/>
<div className="flex justify-center">
      <button className="text-[#B88E2F] border-2 border-[#B88E2F] px-10 py-2 text-center my-5">Show More</button>
      </div>


        </div>
    );
};

export default ProductDetailPage;
