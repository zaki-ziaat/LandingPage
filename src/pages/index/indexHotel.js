import React,{useState} from 'react'
import { Link} from 'react-router-dom';

import ab1 from '../../assets/images/hotel/ab1.jpg';
import ab2 from '../../assets/images/hotel/ab2.jpg';
import ab3 from '../../assets/images/hotel/ab3.jpg';
import background from "../../assets/images/hotel/bg2.jpg";

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';
import UserFeedBack from '../../component/userFeedBack';
import CompanyLogo from '../../component/companyLogo';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import * as Icon from 'react-feather';

import { hotel } from '../../data/dataFour';
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { PiAirplaneTakeoff, PiCurrencyDollarSimpleLight } from 'react-icons/pi';

export default function IndexHotel() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-64">
                <div className="absolute inset-0" id="overlay" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url(${background})` }}></div>
                <div className="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-transparent md:via-indigo-600/80 md:to-indigo-800"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="md:text-start text-center mt-10">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Make your holidays <br /> memorables</h1>
                            <p className="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <Link >
                                <i className="mdi mdi-arrow-down text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800 mt-6"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-28">
                            <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                <div className="section-title">
                                    <h4 className="text-2xl font-semibold mb-3">Search your trip</h4>
                                    <p className="text-slate-400 mx-auto para-desc">We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <form className="mt-4" >
                                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="font-semibold">Check in :</label>
                                            <input name="date" type="date" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="Select date :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Check out :</label>
                                            <input name="date1" type="date" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 end" placeholder="Select date :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Adults :</label>
                                            <input type="number" min="0"  id="adult" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Adults :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Childrens :</label>
                                            <input type="number" min="0"  id="childrens" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Childrens :" />
                                        </div>

                                        <div className="lg:mt-7">
                                            <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Search Now" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <img src={ab1} className="rounded-full lg:w-[400px] w-[280px]" alt="" />
                                <div className="absolute -end-5 -bottom-16">
                                    <img src={ab2} className="rounded-full lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                            <div className="lg:ms-5">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get inspiration for future trips weekly</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                                <ul className="list-none text-slate-400 mt-4">
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                </ul>

                                <div className="mt-6">
                                    <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                   <CompanyLogo/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Popular Tours</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[30px] mt-8">

                        {
                            hotel.map((Data,index) => {
                                return (
                                    <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800" key={index}>
                                        <img src={Data.image} alt="" />
                                        <span className="absolute inset-0 bg-slate-900/20 duration-500"></span>
                                        <div className="absolute top-0 start-0 p-4 pb-0">
                                            <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Recommend</span>
                                        </div>
                                        <div className="absolute bottom-0 start-0 end-0 p-4 pt-0">
                                            <Link className="text-white/80 hover:text-white text-xl font-semibold">Paradise Beach, Island</Link>
                                            <div className="flex justify-between mt-1">
                                                <span className="text-gray-100 flex items-center"><PiCurrencyDollarSimpleLight className="me-2"/> 549</span>
                                                <span className="text-gray-100 flex items-center"><PiAirplaneTakeoff className="me-1"/>10 Days</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6 order-1 md:order-2">
                            <img src={ab3} className="rounded-full" alt="" />
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 order-2 md:order-1">
                            <div className="lg:me-5">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Resort Surprises</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                                <ul className="list-none  text-slate-400 mt-4">
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                </ul>

                                <div className="mt-6">
                                    <Link to="#" onClick={() => setOpen(true)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white lightbox"><Icon.Video className="size-4"></Icon.Video></Link><span className="font-semibold ms-2 align-middle">Watch Now</span>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(!isOpen)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>
                <Blog className="container relative md:mt-24 mt-16" id={""} />
            </section>
            <Footer />
            <CookieModal />
       

         

           

        </>
    )
}
