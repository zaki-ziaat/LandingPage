import React from 'react'
import { Link } from 'react-router-dom'

import EcommerceNavbar from '../../component/Navbar/ecommerceNavbar';
import ShopFooter from '../../component/Footer/shopFooter';
import MobileApp from '../../component/mobileApp';

import { productData } from '../../data/dataTwo';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function shopGrid() {
  
    return (
        <>
            <EcommerceNavbar />
            <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-14">
                        <h3 className="text-3xl leading-normal font-semibold">Shop Grid</h3>
                    </div>

                    <div className="relative mt-3">
                        <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-shop">Techwind</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Product Grid</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-9 md:col-span-8">
                            <h3 className="text-xl leading-normal font-semibold">Showing 1-8 of 16 results</h3>
                        </div>

                        <div className="lg:col-span-3 md:col-span-4 md:text-end">
                            <label className="font-semibold hidden"></label>
                            <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                <option defaultValue>Sort by latest</option>
                                <option>Sort by popularity</option>
                                <option>Sort by rating</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {productData.map((item,index)=>{
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
                                        <ul className="font-medium text-amber-400 list-none space-x-1">
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

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            <MobileApp/>
            </section>
            <ShopFooter/>
        </>
    )
}
