import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

export const BreadCrump = ({ list }) => {
    return (
        <nav className="flex items-center mb-3  text-xs flex-wrap gap-2 mt-10">
            {list?.map((item, index) => (
                item.href ? (
                    <Link to={item.href} key={index}  className="mx-1 text-primaryColor   flex items-center">
                        <span>{item.label}</span> <span className="ml-1"><MdNavigateNext size={18}  /></span>
                    </Link>
                ) : (
                    <span key={index} className="mx-1 text-foreColor">
                        {item.label}
                    </span>
                )
            ))}
        </nav>
    );
};