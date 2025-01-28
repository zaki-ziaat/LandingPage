import React from 'react'
import { Link } from 'react-router-dom';

import hoodie from '../../assets/images/shop/hoodie.jpg';
import beanie from '../../assets/images/shop/beanie.jpg';
import glasses from '../../assets/images/shop/glasses.jpg';

import CookieModal from '../../component/cookieModal'
import ShopFooter from   '../../component/Footer/shopFooter';
import EcommerceNavbar from '../../component/Navbar/ecommerceNavbar';
import MobileApp from '../../component/mobileApp';


import { productData,productCategories } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';

export default function IndexShop() {

    return (
        <>
           <EcommerceNavbar />
            <section className="relative mt-20">
                <div className="container-fluid relative">
                    <div className="relative py-48 table w-full shadow-md overflow-hidden">
                        <div className="absolute inset-0 bg-[url('../../assets/images/shop/bg.jpg')] bg-no-repeat md:bg-left bg-center bg-cover"></div>
                        <div className="absolute inset-0 bg-slate-950/30"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1">
                                <div className="md:text-start text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">New Accessories <br /> Collections</h1>
                                    <p className="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-6">
                                        <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i className="mdi mdi-cart-outline"></i> Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-16">
                <div className="container relative">
                    <div id="grid" className="md:flex w-full justify-center mx-auto mt-4">
                        <div className="md:w-1/2 p-3 picture-item">
                            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src={hoodie} className="group-hover:scale-110 transition-all duration-500" alt="" />
                                <div className="absolute bottom-4 start-4">
                                    <Link className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Hoodies</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                        <div className="p-3 picture-item">
                            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src={beanie} className="group-hover:scale-110 transition-all duration-500" alt="" />
                                <div className="absolute bottom-4 start-4">
                                    <Link className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Beanies for Man & Women</Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 picture-item">
                            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img src={glasses} className="group-hover:scale-110 transition-all duration-500" alt="" />
                                <div className="absolute bottom-4 start-4">
                                    <Link className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Glasses</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
                </div>

                <div className="container relative mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="text-2xl leading-normal font-semibold">Most Viewed Products</h3>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="/shop-grid-two" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View More Items <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {productData.slice(0, 8).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <img src={item.image} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link to="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1"><Link to={`/shop-item-detail/${item.id}`} className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                    
                                </div>
    
                                <div className="mt-4">
                                    <Link to={`/shop-item-detail/${item.id}`} className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="/shop-grid-two" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View More Items <FaArrowRight className='ms-2 text-xs'/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-16">
                    <div className="grid grid-cols-1 items-center">
                        <h3 className="text-2xl leading-normal font-semibold">Top Categories</h3>
                    </div>
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
                        {productCategories.map((item,index)=>{
                            return(
                                <div key={index} className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md transition-all duration-500 p-6 text-center">
                                    <img src={item.image} className="rounded-full shadow-md dark:shadow-gray-800 size-20 block mx-auto mb-2" alt="" />
        
                                    <Link className="font-semibold hover:text-indigo-600 text-lg">{item.title}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative mt-16">
                    <div className="grid grid-cols-1 items-center">
                        <h3 className="text-2xl leading-normal font-semibold">Popular Products</h3>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {productData.slice(8, 12).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <img src={item.image} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link to="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                    
                                </div>
    
                                <div className="mt-4">
                                    <Link to={`/shop-item-detail/${item.id}`} className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-28 w-full table relative bg-[url('../../assets/images/shop/cta.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">End of Season Clearance <br /> Sale upto 30%</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-6">
                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i className="mdi mdi-cart-outline"></i> Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center">
                        <h3 className="text-2xl leading-normal font-semibold">Recent Products</h3>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {productData.slice(12, 17).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <img src={item.image} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link to="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1"><Link to={`/shop-item-detail/${item.id}`}className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none space-x-1 absolute top-[10px] start-4">
                                        <li><Link className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                    
                                </div>
    
                                <div className="mt-4">
                                    <Link to="/shop-item-detail" className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <MobileApp/>
            </section>
            <ShopFooter/>
            <CookieModal />
        </>
    )
}
