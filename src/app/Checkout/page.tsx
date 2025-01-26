import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";



const Checkout = () => {
    return (
        <div>
            <nav className="flex justify-between items-center w-full h-[100px] sm:h-[120px] bg-[#ffffff] px-6">
                <div className="flex w-full items-center justify-between max-w-7xl">
                    {/* Navigation Links */}
                    <div className="font-bold text-[#000000] space-x-[80px] absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                        <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
                        <Link href="/About" className="hover:text-blue-500">About</Link>
                        <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
                    </div>

                    {/* Icon Links */}
                    <div className="hidden sm:hidden md:flex lg:flex space-x-4 lg:space-x-[60px] text-xl absolute right-16 mr-[50px]">
                        <Link href="/Account">
                            <span className="flex items-center">
                                <IoPersonOutline className="hover:text-blue-500 cursor-pointer" />
                                <IoAlert className="hover:text-blue-500 cursor-pointer ml-2" />
                            </span>
                        </Link>
                        <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
                        <FaRegHeart className="hover:text-blue-500 cursor-pointer" />
                        <Link href="/Asgard">
                            <BsCart3 className="hover:text-blue-500 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/*background pic*/}

            <div className="bg-cover bg-center h-[300px] flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/Rectangle.png')" }}>
                <Image src="/images/Meubel.png" alt="Meubel" width={77} height={77} className='mt-[60px]  ' />
                <div className=' '>

                    <div> <h1 className='font-poppins font-medium   text-[48px] hover:text-blue-500 leading-[72px] text-[#000000] '>Checkout</h1></div>

                    <div className='flex justify-items-center mb-[60px] w-[115px]  h-[24px]' >
                        <p className='font-poppins ml-12 hover:text-blue-500 font-medium text-[16px] text-[#000000] leading-[24px] '>Home</p>
                        <p className=' '><SlArrowRight className='w-[14px] h-[8px] hover:text-blue-500 mt-[10px]' /></p>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000] hover:text-blue-500 '>Checkout</p></div>
                </div>
            </div >


            <div className=' h-[1529px]  mx-[30px] '>
                <div className=' h-[1414px]  flex  mt-[50px] justify-between mx-[200px] '>
                    <div className='w-[608px] flex flex-col mx-[30px] justify-start h-[1414px] '>

                        <div className='w-[250px]   mt-[40px]   ml-[20px]  h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000] ' >Billing details
                        </div>

                        <div className='flex  justify-center space-x-8 w-[590px] h-[124px]  mt-[40px]'>
                            <div className='   w-[250px] h-[54px]'>
                                <label htmlFor=" first name" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">First Name</label>
                                <input type="text" id="first name" className="w-[211px] h-[75px]  p-5 mt-[5px] border text-[#9F9F9F] rounded-xl" placeholder="First name" />
                            </div>
                            <div className=' w-[245px] h-[24px] ' >
                                <label htmlFor=" last name" className=" font-medium text-[#000000] font-poppins text-[16px] leading-[24px] mb-2">Last Name</label>
                                <input type="text" id=" last name" className="w-[211px] h-[75px]  p-5 mt-[5px] border text-[#9F9F9F] rounded-xl" placeholder="last name" />
                            </div>
                            l
                        </div>

                        <div className=' w-[590px] h-[124px] mt-[40px] ml-[20px]  ' >
                            <label htmlFor=" company name" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Company Name (Optional)</label>
                            <input type="text" id=" company name" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="company name" />
                        </div>

                        <div className=' flex flex-col w-[590px]  ml-[20px] h-[124px] mt-[40px]   ' >
                            <label htmlFor=" street address" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Street address</label>
                            <input type="text" id=" Street address" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="street address" />
                        </div>

                        <div className=' flex flex-col  w-[590px] h-[124px] mt-[40px] ml-[20px] ' >
                            <label htmlFor=" Town / City" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Town / City</label>
                            <input type="text" id=" town / city" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Town / City" />
                        </div>

                        <div className=' flex flex-col w-[590px] h-[124px] mt-[40px] ml-[20px]   ' >
                            <label htmlFor=" Street address" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">ZIP code</label>
                            <input type="text" id=" Street address" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="street address" />
                        </div>

                        <div className=' flex flex-col w-[590px] h-[124px] mt-[40px] ml-[20px]   ' >
                            <label htmlFor="Phone" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Phone</label>
                            <input type="text" id="Phone" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Phone" />
                        </div>

                        <div className=' flex flex-col  w-[590px] h-[124px] mt-[40px] ml-[20px]   ' >
                            <label htmlFor=" Email address" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Email address</label>
                            <input type="text" id=" Email address" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Email address" />
                        </div>

                        <div className=' flex flex-col w-[225px] h-[54px]  mt-[40px] ml-[20px] ' >

                            <input type="text" id=" Additional information" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Additional information" />
                        </div>



                    </div>





                    <div className=' w-[608px] h-[789px]  '>
                        <div className=' w-[533px] h-[718px] ' >


                            <div className='mt-[80px] '>
                                <ul className='flex space-x-16  py-2 justify-between'>
                                    <li className='text-[24px] font-poppins font-medium leading-[36px] text-[#000000] hover:text-blue-500'>Product</li>
                                    <li className='text-[24px] font-poppins font-normal leading-[30px] text-[#000000]  hover:text-blue-500'>Subtotal</li>

                                </ul>
                            </div>

                            <div >
                                <ul className='flex space-x-16  py-5 justify-between'>
                                    <li className='text-[16px] font-poppins font-normal leading-[24px] text-[#9F9F9F] hover:text-blue-500'>Asgaard sofa</li>
                                    <li className='text-[16px] font-poppins font-light leading-[24px] text-[#000000]  hover:text-blue-500'>Rs. 250,000.00</li>

                                </ul>
                            </div>

                            <div >
                                <ul className='flex space-x-16  py-5 justify-between '>
                                    <li className='text-[16px] font-poppins font-medium leading-[24px] text-[#000000] hover:text-blue-500'>Subtotal</li>
                                    <li className='text-[16px] font-poppins font-normal leading-[30px] text-[#9F9F9F]  hover:text-blue-500'>Rs. 250,000.00</li>

                                </ul>
                            </div>

                            <div>
                                <ul className='flex space-x-16 py-5  justify-between '>
                                    <li className='text-[16px] font-poppins font-medium leading-[24px] text-[#000000] hover:text-blue-500'>Total</li>

                                    <li className='text-[20px] font-poppins font-medium leading-[24px] text-[#B88E2F] hover:text-blue-500'>Rs. 250,000.00</li>
                                </ul>
                            </div>

                            <div className=' border-t  w-[528px] space-x-5 flex h-[27px] '>
                                <span><GoDotFill /></span> <span className='font-poppins font-normal text-[16px] leading-[24px] text-[#000000] '>Direct Bank Transfer</span>
                            </div>

                            <div className='w-[528px] h-[72px] font-poppins font-light text-[16px] leading-[24px] text-[#9F9F9F] '>
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>

                            <div className=' w-[528px] space-x-5 flex h-[27px] '>
                                <span><GoDot /></span> <span className='font-poppins font-normal text-[16px] leading-[24px] text-[#9F9F9F] '>Direct Bank Transfer</span>
                            </div>
                            <div className='  w-[528px] space-x-5 flex h-[27px] '>
                                <span><GoDot /></span> <span className='font-poppins font-normal text-[16px] leading-[24px] text-[#9F9F9F] '>Direct Bank Transfer</span>
                            </div>

                            <div className='w-[528px] h-[72px]  '>
                                <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            </div>
                            <div className=' flex justify-center'>

                                <button className=' flex justify-center items-center font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border border-[#000000] rounded-[10px] w-[222px] mt-[20px] h-[60px] hover:text-blue-500 item-center '><Link href="/Checkout">Place Order</Link></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {/* Footer Section */}
            <div className='  bg-[#FAF4F4]  mx-[30px]'>

                <div className='flex items-center justify-center gap-[60px]   h-[300px] w-full mx-[30px]'>
                    <div className=' w-[376px]  h-[108px]  bg-[#FAF4F4] '>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>Free Delivery</h1>
                        <p>For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className='  w-[376px]  h-[108px]'>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>90 Days Return</h1>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div className='  w-[376px]  h-[108px]'>
                        <h1 className='font-poppins text-[32px] font-medium text-[#000000] leading-[48px] '>Secure Payment</h1>
                        <p className='font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F] '>100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Checkout
