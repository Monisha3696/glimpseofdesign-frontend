import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/footer-logo.PNG";
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp";
import {BsArrowUp} from "@react-icons/all-files/bs/BsArrowUp";
import {BiUserCircle} from "@react-icons/all-files/bi/BiUserCircle";

const Footer = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div
            className="flex lg:justify-center lg:items-center flex-col px-12 lg:bg-main pt-9 md:pt-12 xl:pt-20 pb-4 text-secondary border-t border-secondary mt-16">
            {/* 4 x 4 grid to store footer items*/}
            <div className="grid grid-cols-1 lg:grid-cols-4 pb-12">
                {/* row 1 */}
                <div className="flex flex-col flex-shrink-0 min-h-full">
                    {/* <div>
                        <p className="font-bold text-2xl">Glimpse of Design</p>
                        <p className="font-light text-base">Interior Design Studio</p>
                    </div> */}
                </div>
                <div></div>
                <div></div>
                <div>
                    <section className="flex my-4 float-right lg:float-left">
                        <button
                            className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
                            <button onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }} className="flex flex-row flex-nowrap items-center">
                                {" "}
                                Go to Top <BsArrowUp className="ml-2"/>
                            </button>
                        </button>
                    </section>
                </div>

                {/* row 2 */}
                <div>
                    {/* <Link to="#">
                        <img className="h-16" src={Logo} alt="Glimpse of Design"/>
                    </Link> */}
                </div>
                <div></div>
                <div></div>
                <div>
                    {/* <section className="flex my-4 float-right lg:float-left">
                        <Link to="/admin"
                              className="px-6 mt-2 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200  rounded-full">
              <span className="flex flex-row flex-nowrap items-center">
                {" "}
                  Login as Admin <BiUserCircle className="ml-2 text-2xl"/>
              </span>
                        </Link>
                    </section> */}
                </div>

                {/* row 3 */}
                <div>
                    <p className="text-sm leading-none text-gray-800 mt-6">
                        Copyright © 2022 Castoff's Creative 
                    </p>
                </div>
                <div className="shrink grow w-full sm:ml-0 lg:mt-0 h-8">
                    <h2 className="text-base font-semibold text-gray-800 uppercase">
                        Contact Us
                    </h2>
                </div>
                <div></div>
                <div></div>

                {/* row 4 */}
                <div className="flex flex-nowrap flex-col content-start items-start gap-x-4">
                    <p className="text-sm leading-none text-gray-800 mt-4">
                        All rights reserved
                    </p>
                    <div className="flex flex-row gap-x-4 mt-4">
                        <div
                            className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <a
                                href="https://www.instagram.com/castoffs_creative/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <FaFacebookF className="text-secondary text-lg"/> */}
                                <FaInstagram className="text-secondary text-lg" />
                            </a>
                        </div>
                        <div
                            className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <Link to="#">
                                {/* <FaWhatsapp className="text-secondary text-lg"/> */}
                            </Link>
                        </div>
                                     <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
               <Link to="#">
                 {/* <FaInstagram className="text-secondary text-lg" /> */}
               </Link>
             </div>
                    </div>
                </div>
                <div className="border-l-2 border-r-0 pl-2 h-12 mb-8 md:mb-4 lg:0">
                    <p>Address:</p>
                    <p>Oklahoma State Univerrsity, Stillwater,74074.</p>
                </div>
                <div className="border-l-2 border-r-0 pl-2 h-12 mb-8 md:mb-4 lg:0">
                    <p>Telephone:</p>
                    <p>4057628737</p>
                </div>
                <div className="border-l-2 border-r-0 pl-2 h-12 mb-8 md:mb-4 lg:0">
                    <p>Email:</p>
                    <p>oklahomastate@okstate </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
