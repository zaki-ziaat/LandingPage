import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';

import { accordionData } from '../../data/dataTwo';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function PageTerms() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <>
            <Navbar />

            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-semibold">Terms of Services</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link >Utility</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Terms</li>
                    </ul>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="md:w-3/4">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <h5 className="text-xl font-semibold mb-4">Introduction :</h5>
                                <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                                <h5 className="text-xl font-semibold mb-4 mt-8">User Agreements :</h5>
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <b className="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-red-600">composed</b> in a pseudo-Latin language which more or less <b className="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-red-600">advantage</b> of its Latin origin and the relative <b className="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <b className="text-red-600">attention</b> from the layout.</p>
                                <p className="text-slate-400 mt-3">There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-red-600">nonsensical</b> stories.</p>
                                <p className="text-slate-400 mt-3">It seems that only <b className="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                                <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                                <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                                <ul className="list-none space-x-1 text-slate-400 mt-3">
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Create your own skin to match your brand</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Create your own skin to match your brand</li>
                                </ul>

                                <h5 className="text-xl font-semibold mt-8">Users Question & Answer :</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordionData.map((item, index) => (
                                        <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`${activeIndex === index ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule ="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeIndex === index && (
                                                <div>
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    ))}
                                </div>

                                <div className="mt-6">
                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Accept</Link>
                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Decline</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
