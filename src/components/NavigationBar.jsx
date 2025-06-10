import React, { useState } from "react";
import { Searchbar } from "./Searchbar";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { ContentWrapper } from "../layouts/ContentWrapper";

export const NavigationBar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <ContentWrapper classes="bg-gradient-to-l from-[#F5FFF9] via-[#E4FFD9] to-[#DBFFD9] border-b border-gray-200">
            <div>
                <div className="flex justify-between items-center py-4 ">
                    <h1 className="logo text-3xl font-bold text-primaryColor">Layers</h1>
                    {/* <Searchbar /> */}
                    <div className="flex items-center gap-x-6">
                        <div
                            className="relative cursor-pointer text-primaryColor"
                            onMouseEnter={() => setHovered("heart")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <span>
                                {hovered === "heart" ? <FaHeart size={24} /> : <CiHeart size={24} />}
                            </span>
                            <span className="rounded-full bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center absolute -top-1 -right-2">1</span>
                        </div>
                        <div
                            className="relative cursor-pointer text-primaryColor"
                            onMouseEnter={() => setHovered("cart")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <span>
                                {hovered === "cart" ? <FaShoppingCart size={26} /> : <CiShoppingCart size={26} />}
                            </span>
                            <span className="rounded-full bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center absolute -top-1 -right-2">0</span>
                        </div>
                        <div
                            className="relative cursor-pointer text-primaryColor mr-2"
                            onMouseEnter={() => setHovered("user")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <span>
                                {hovered === "user" ? <FaUser size={22} /> : <CiUser size={22} />}
                            </span>
                            <span className="rounded-full bg-red-500 text-white text-[8px] w-4 h-4 flex items-center justify-center absolute -top-1 -right-2">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};
