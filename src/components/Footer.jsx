import React from "react";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../layouts/ContentWrapper";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { quickLinks,customerService } from "../mockData/footerData";
export const Footer = () => (

    <footer className="bg-[#222] text-white mt-12">
        <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* About */}
            <div>
            <h1 className="logo text-4xl font-bold ">Layers</h1>

                <p className="mt-5 text-sm">
                    Your one-stop shop for the latest trends in fashion, electronics, and more. Fast shipping, easy returns, and 24/7 support.
                </p>
                <div className="flex space-x-4 mt-8">
                    <Link to="#" className="text-[#1877F2] bg-white w-10 h-10 flex items-center justify-center rounded-full">
                        <FaFacebookF className="text-lg" />
                    </Link>
                    <Link to="#" className="text-[#1DA1F2] bg-white w-10 h-10 flex items-center justify-center rounded-full">
                        <FaTwitter className="text-xl" />
                    </Link>
                    <Link to="#" className="text-[#E4405F] bg-white w-10 h-10 flex items-center justify-center rounded-full">
                        <RiInstagramFill className="text-xl" />
                    </Link>
                </div>
            </div>
            {/* Quick Links */}
            <div>
                <h4 className="font-semibold text-xl mb-5 text-primaryColor">Quick Links</h4>
                <ul className="list-none p-0 space-y-4 text-sm">
                    {quickLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className="">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Customer Service */}
            <div>
                <h4 className="font-semibold text-xl mb-5 text-primaryColor">Customer Service</h4>
                <ul className="list-none p-0 space-y-4 text-sm">
                    {customerService.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className="">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Newsletter */}
            <div>
                <h4 className="font-semibold text-xl text-primaryColor mb-5">Subscribe Newsletter</h4>
                <form className="flex">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="p-2 rounded-l w-full border-none text-xs focus:outline-none text-black"
                    />
                    <button
                        type="submit"
                        className="p-2 px-4 text-xs rounded-r border-none bg-primaryColor text-white cursor-pointer font-semibold"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div className="border-t border-[#444] py-4 text-center text-sm">
            &copy; {new Date().getFullYear()} Layers. All rights reserved.
        </div>
        </ContentWrapper>
    </footer>
);
