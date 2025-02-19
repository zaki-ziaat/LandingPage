import React from 'react'
import { Link } from 'react-router-dom';

import classic02 from '../../assets/images/app/classic02.png';
import fund from '../../assets/images/payments/fund.png';
import visaa from '../../assets/images/payments/payment/visaa.png';
import facebook_logo_2019 from '../../assets/images/client/facebook-logo-2019.png';
import lenovo_logo from '../../assets/images/client/lenovo-logo.png';
import linkedin from '../../assets/images/client/linkedin.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';
import MobileApp from '../../component/mobileApp';

import { paymentFeature } from '../../data/dataFour';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function IndexPayment() {

    return (
        <>
            <Navbar />
            <section className="relative overflow-hidden table w-full bg-slate-50 dark:bg-slate-800 py-28 lg:py-36">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="md:me-6 relative z-2">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Best way to make Online Payments</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing.</p>

                                <div className="subcribe-form mt-6 mb-3">
                                    <form className="relative max-w-xl">
                                        <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Enter your mail" />
                                        <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Get started <FaArrowRight className="ms-2 text-[10px]"/></button>
                                    </form>
                                </div>

                                <span className="text-slate-400 font-medium">Looking for help? <Link  className="text-indigo-600">Get in touch with us</Link></span>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative">
                                <img src={classic02} className="mx-auto relative z-1" alt="" />
                                <div className="overflow-hidden absolute md:size-[550px] size-[400px] bg-slate-200/40 dark:bg-slate-900/40 bottom-1/2 translate-y-1/2 start-0 end-0 mx-auto z-0 rounded-full"></div>

                                <div className="md:w-72 w-64 absolute md:-top-4 top-0 lg:start-0 md:-start-14 start-0 z-2">
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                        <h5 className="text-lg font-semibold mb-2">Your Funds</h5>
                                        <span className="text-2xl font-bold">$ 48,756.55</span>

                                        <img src={fund} className="rounded-md mt-5" alt="" />
                                    </div>
                                </div>

                                <div className="md:w-[350px] w-72 absolute top-1/3 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 z-3">
                                    <div className="p-5 bg-indigo-600 rounded-md shadow dark:shadow-gray-800">
                                        <img src={visaa} className="h-16" alt="" />

                                        <div className="pt-5">
                                            <h5 className="text-lg font-bold text-white">•••• •••• •••• 9856</h5>

                                            <div className="flex justify-between text-slate-50 mt-4">
                                                <p>Calvin Carlo</p>
                                                <span>Exp: <span>01/24</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-64 absolute md:-bottom-4 bottom-0 end-0 z-3">
                                    <div className="p-5 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                        <h5 className="font-semibold text-lg">Recent Transections</h5>

                                        <ul>
                                            <li className="flex justify-between items-center pt-5">
                                                <div className="flex items-center">
                                                    <img src={facebook_logo_2019} className="w-10" alt="" />

                                                    <div className="ms-3">
                                                        <p className="font-semibold">Facebook Ads</p>
                                                        <p className="text-slate-400 text-sm">Dt.1st Dec 22</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-slate-400">$ 0.99</span>
                                                </div>
                                            </li>

                                            <li className="flex justify-between items-center pt-5">
                                                <div className="flex items-center">
                                                    <img src={lenovo_logo} className="w-10" alt="" />

                                                    <div className="ms-3">
                                                        <p className="font-semibold">Lenovo Laptop</p>
                                                        <p className="text-slate-400 text-sm">Dt.29th Nov 22</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-slate-400">$ 599</span>
                                                </div>
                                            </li>

                                            <li className="flex justify-between items-center pt-5">
                                                <div className="flex items-center">
                                                    <img src={linkedin} className="w-10" alt="" />

                                                    <div className="ms-3">
                                                        <p className="font-semibold">Linkedin Pro Ac.</p>
                                                        <p className="text-slate-400 text-sm">Dt.25th Nov 22</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-slate-400">$ 0.99</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pt-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Trusted Partners</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Our Trusted Partners</p>
                    </div>

                    <CompanyLogo/>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {paymentFeature.map((item,index)=>{
                            const Icons = item.icon
                            return(
                                <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
                                    <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons className='size-7'/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative">
                            <img src={classic02} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-slate-200/40 dark:bg-slate-800/40 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 rounded-[100px]"></div>
                        </div>

                        <div className="lg:ms-4">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">You will always get extra security from us</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>
                    <UserFeedBack2 />
                </div>
                <MobileApp/>
            </section>
            <Footer />
             <CookieModal/>
        </>
    )
}
