import React from "react";
import { IoIosSearch } from "react-icons/io";
import { ContentWrapper } from "../layouts/ContentWrapper";
export const Searchbar = () => {
  return (
    <ContentWrapper>
      <form className="relative flex items-center justify-center  text-black">
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search"
          className="text-sm px-5 pr-12 py-2.5 min-w-[500px] rounded-full !bg-black"
        />
        <button className="bg-[#091057] absolute text-white p-2  rounded-full right-0">
          <IoIosSearch size={20} />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </ContentWrapper>
  );
};
