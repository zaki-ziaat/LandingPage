import React from 'react'
import { Link } from 'react-router-dom';

import Footer from '../../component/Footer/footer';
import NftNavbar from '../../component/Navbar/nftNavbar';
import { walletData } from '../../data/dataFive';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function NftWallet() {
    return (
        <>
            <NftNavbar />
            <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-medium">Wallets</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index">Techwind</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-nft">NFT</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Wallet</li>
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
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">

                        {
                            walletData.map((data,index) => {
                                return (
                                    <div key={index} className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                                        <div className="py-10 bg-gradient-to-r to-orange-600/70 from-indigo-600/70"></div>
                                        <div className="p-6 pt-0 -mt-10 text-center">
                                            <img src={data.image} className="size-20 p-4 rounded-full bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                            <div className="mt-4">
                                                <h5 className="text-xl font-semibold mb-3">{data.title}</h5>
                                                <p className="text-slate-400">Learn about how to get the wallet and much more clicking <Link to="" className="text-indigo-600 font-semibold inline-flex items-center">here <FaArrowRight className='text-xs ms-2'/></Link></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
