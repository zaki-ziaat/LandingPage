import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-light.png"
import Payment1 from "../../assets/images/payments/american-ex.png";
import Payment2 from "../../assets/images/payments/discover.png";
import Payment3 from "../../assets/images/payments/master-card.png";
import Payment4 from "../../assets/images/payments/paypal.png";
import Payment5 from "../../assets/images/payments/visa.png";

import * as Icon from 'react-feather'
import { PiShoppingCart } from "react-icons/pi";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiTruck } from "react-icons/tfi";
import { BsArchive } from "react-icons/bs";
import { BiCreditCardAlt, BiShieldAlt2 } from "react-icons/bi";

export default function ShopFooter(){
    return(
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
        <div className="container relative">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="py-[60px] px-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-3 md:col-span-12">
                                <Link to="#" className="text-[22px] focus:outline-none">
                                    <img src={Logo} alt=""/>
                                </Link>
                                <p className="mt-6 text-gray-300">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul className="list-none mt-5 space-x-1 space-y-1">
                                    <li className="inline"><Link to="https://1.envato.market/techwind-react" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><PiShoppingCart className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaDribbble className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaInstagram className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaTwitter className='text-sm'/></Link></li>
                                </ul>
                            </div>
                            
                            <div className="lg:col-span-6 md:col-span-12">
                                <h5 className="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>
    
                                <div className="grid md:grid-cols-12 grid-cols-1">
                                    <div className="md:col-span-4">
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Men</Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Jackets & Coats </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Jeans </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/>  Loungewear </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Polo shirts </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Shirts</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="md:col-span-4">
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Shorts </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Suits Swimwear </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> T-shirts </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Tracksuits </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Trousers</Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Shirts</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="md:col-span-4">
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> My account </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Order History </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Wish List </Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Newsletter</Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Affiliate</Link></li>
                                            <li className="mt-[10px]"><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> Returns</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        
                            <div className="lg:col-span-3 md:col-span-4">
                                <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="my-3">
                                            <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="size-4 absolute top-3 start-4"/>
                                                <input type="email" className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200" placeholder="Email" name="email" required=""/>
                                            </div>
                                        </div>
                                            
                                        <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="grid grid-cols-1">
                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <div className="flex items-center lg:justify-center">
                            <TfiTruck className="align-middle text-lg mb-0 me-2"/>
                            <h6 className="mb-0 font-medium">Free delivery</h6>
                        </div>
    
                        <div className="flex items-center lg:justify-center">
                            <BsArchive className="align-middle text-lg mb-0 me-2"/>
                            <h6 className="mb-0 font-medium">Non-contact shipping</h6>
                        </div>
    
                        <div className="flex items-center lg:justify-center">
                            <BiCreditCardAlt className="align-middle text-lg mb-0 me-2"/>
                            <h6 className="mb-0 font-medium">Money-back quarantee</h6>
                        </div>
    
                        <div className="flex items-center lg:justify-center">
                            <BiShieldAlt2 className="align-middle text-lg mb-0 me-2"/> 
                            <h6 className="mb-0 font-medium">Secure payments</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:text-start text-center">
                        <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>
    
                    <ul className="list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                        <li className="inline"><Link to=""><img src={Payment5} className="max-h-6 inline" title="American Express" alt=""/></Link></li>
                        <li className="inline"><Link to=""><img src={Payment1} className="max-h-6 inline" title="Discover" alt=""/></Link></li>
                        <li className="inline"><Link to=""><img src={Payment2} className="max-h-6 inline" title="Master Card" alt=""/></Link></li>
                        <li className="inline"><Link to=""><img src={Payment3} className="max-h-6 inline" title="Paypal" alt=""/></Link></li>
                        <li className="inline"><Link to=""><img src={Payment4} className="max-h-6 inline" title="Visa" alt=""/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}