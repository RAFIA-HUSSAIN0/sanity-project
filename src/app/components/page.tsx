import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearchOutline, IoPersonOutline, IoAlert } from 'react-icons/io5';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";

const Account = () => {
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

                    <div> <h1 className='font-poppins font-medium   text-[48px] hover:text-blue-500 leading-[72px] text-[#000000] '>My Account</h1></div>

                    <div className='flex   justify-items-center ml-[20px] mb-[60px] w-[205px]  h-[24px]' >
                        <p className='font-poppins ml-12 hover:text-blue-500 font-medium text-[16px] text-[#000000] leading-[24px] '>Home</p>
                        <p className=' '><SlArrowRight className='w-[14px] h-[8px] hover:text-blue-500 mt-[10px]' /></p>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000] hover:text-blue-500 '>My Account</p></div>
                </div>
            </div >

            <div className='w-[] flex justify-between h-[760px] mx-[230px] '>
                <div className=' w-[608px] h-[630px] mx-[30px]'>
                    <div className='w-[110px]  mt-[40px]   ml-[40px]  h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000] ' >Log In
                    </div>

                    <div className=' flex flex-col w-[590px] h-[124px] mt-[40px] ml-[40px]  ' >
                        <label htmlFor="Username or email address" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Username or email address</label>
                        <input type="text" id=" Username or email address" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Username or email address" />
                    </div>

                    <div className='flex flex-col  w-[590px] h-[124px] mt-[40px] ml-[40px]  ' >
                        <label htmlFor=" Password" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Password</label>
                        <input type="text" id=" Password" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Password" />
                    </div>

                    <div className='mt-[20px] ml-[40px]'>
                        <span className='border  py-1 border-[#9F9F9F]  rounded-lg  px-3'> </span> <span className=" font-medium mx-[20px] font-poppins text-[16px] leading-[24px] mb-2">Remember Me</span>


                    </div>

                    <div className='flex ml-[40px]  mt-[20px] space-x-[60px]'>


                        <button className='font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border border-[#000000] rounded-[10px] w-[222px] mt-[20px] h-[60px] hover:text-blue-500 item-center '>
                            <Link href="/Checkout">Log In</Link>
                        </button>
                        <p className='mt-[50px]'>Lost Your Password</p>
                    </div>

                </div>
                <div className='w-[608px] h-[630px] mx-[30px]'>
                    <div className='w-[160px]   mt-[40px]   ml-[40px]  h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000] ' >Register
                    </div>


                    <div className=' flex flex-col  w-[590px] h-[124px] mt-[40px] ml-[40px]  ' >
                        <label htmlFor=" Email Address" className=" font-medium  font-poppins text-[16px] leading-[24px] mb-2">Email Address</label>
                        <input type="text" id=" Email Address" className="w-[453px] h-[75px]  p-5 mt-[5px] border rounded-xl" placeholder="Email Address" />
                    </div>

                    <div className='w-[453px] h-[48px]  mt-[40px] ml-[40px]  '>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000]'>A link to set a new password will be sent to your email address.</p>
                    </div>


                    <div className='w-[453px] h-[72px]  mt-[40px] ml-[40px] '>
                        <p className='font-poppins font-light text-[16px] leading-[24px] text-[#000000]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    </div>


                    <button className='font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border border-[#000000] rounded-[10px] w-[222px] mt-[40px] ml-[40px] h-[60px] hover:text-blue-500 item-center '><Link href="/Checkout">Register</Link></button>







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

export default Account
