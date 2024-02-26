"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  return (
    <div
      onClick={searchModal.onOpen}
      className=" py-2
  w-full
  md:w-auto
  border-[1px]
  rounded-full
  shadow-sm
  hover:shadow-md
  transition
  cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className=" px-6 text-sm font-semibold">Anywhere</div>
        <div className="px-6 flex-1 hidden sm:block text-sm font-semibold border-x-[1px] text-center">
          Any Week
        </div>
        <div className="pl-6 pr-2 flex flex-row items-center  gap-3    text-sm text-gray-600 ">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
