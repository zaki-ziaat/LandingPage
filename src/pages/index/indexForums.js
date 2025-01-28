import React from 'react'
import { Link } from 'react-router-dom';

import image9 from '../../assets/images/blog/06.jpg';
import image10 from '../../assets/images/blog/07.jpg';
import image11 from '../../assets/images/blog/08.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather'

import { forumData } from '../../data/dataThree';
import { LuSearch } from 'react-icons/lu';
import { FaRegComment } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';

export default function IndexForums() {
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-36 md:py-56 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10 text-center">
                        <h3 className="font-bold uppercase leading-normal text-4xl mb-5">Welcome to the Techwind Forum</h3>

                        <p className="text-slate-400 text-lg mx-auto">We're here to help. Get in touch and we'll get back to you as soon as we can</p>

                        <div className="subcribe-form mt-6">
                            <form className="relative max-w-xl mx-auto">
                                <input type="text" id="SearchForumKeyword" name="text" className="pt-4 pe-14 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Enter your keywords :" />
                                <button type="submit" className="inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] size-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><LuSearch className="text-base"/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="relative -mt-12 rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900">
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="md:col-span-6">
                                    <div className="w-full py-52 bg-slate-400 bg-[url('../../assets/images/saas/cta.jpg')] bg-no-repeat bg-top bg-cover jarallax" data-jarallax data-speed="0.5"></div>
                                </div>
                                <div className="md:col-span-6">
                                    <div className="p-6">
                                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Join Our Forum</h3>

                                        <p className="text-slate-400 max-w-xl">Talk about anything that's on your mind and see what others think. As a guest to our forum you are only able to view posts. When you register with the Forumix forum you can join in with topics, start new topics and generally be a part of the first level of our community.</p>

                                        <div className="mt-6">
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded me-2 mt-2">Register Now!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8">
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 rounded-md border border-gray-100 dark:border-slate-800">
                                <table className="w-full text-start">
                                    <thead className="text-lg border-b border-gray-100 dark:border-slate-800">
                                        <tr>
                                            <th className="text-start py-6 px-4 font-semibold min-w-[300px]">Forum</th>
                                            <th className="text-center py-6 px-4 font-semibold min-w-[40px]">Topics</th>
                                            <th className="text-center py-6 px-4 font-semibold min-w-[40px]">Comments</th>
                                            <th className="text-end py-6 px-4 font-semibold min-w-[220px]">Posted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {forumData.map((item,index)=>{
                                            return(
                                                <tr className="border-b border-gray-100 dark:border-slate-800" key={index}>
                                                <th className="p-4 text-start">
                                                    <div className="flex">
                                                     <FaRegComment className="text-indigo-600 text-2xl"/>
    
                                                        <div className="ms-2">
                                                            <Link to="/forums-topic" className="hover:text-indigo-600 text-lg">{item.title}</Link>
                                                            <p className="text-slate-400 font-normal">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="text-center p-4">5</td>
                                                <td className="text-center p-4">10</td>
                                                <td className="p-4">
                                                    <div className="flex items-center">
                                                        <img src={item.image} className="h-10 rounded-full shadow dark:shadow-slate-800" alt="" />
    
                                                        <div className="ms-2">
                                                            <Link to="#" className="hover:text-indigo-600 font-semibold">{item.name}</Link>
                                                            <p className="text-slate-400 text-sm font-normal inline-flex items-center"><GoClock/> May 2022</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Sign In</h5>
                                <form className="text-start mt-8">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password:" />
                                        </div>

                                        <div className="flex justify-between mb-4">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                                <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                            </div>
                                            <p className="text-slate-400 mb-0"><Link to="/auth-re-password" className="text-slate-400">Forgot password ?</Link></p>
                                        </div>

                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login / Sign in" />
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Don't have an account ?</span> <Link to="/auth-signup" className="text-black dark:text-white font-bold inline-block">Sign Up</Link>
                                        </div>
                                    </div>
                                </form>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent Reply</h5>
                                <div className="flex items-center mt-8">
                                    <img src={image9} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image10} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image11} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="size-4"></Icon.GitHub></Link></li>
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="size-4"></Icon.Youtube></Link></li>
                                    <li className="inline"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="size-4"></Icon.Gitlab></Link></li>
                                </ul>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                                    <li className="inline-block m-2"><Link to='#'className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                                    <li className="inline-block m-2"><Link to='#' className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}
