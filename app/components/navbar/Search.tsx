"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }
    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let dif = differenceInDays(end, start);

      if (dif === 0) dif = 1;
      return `${dif} Days`;
    }
    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }
    return "Add Guests";
  }, [guestCount]);

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
        <div className=" px-6 text-sm font-semibold">{locationLabel}</div>
        <div className="px-6 flex-1 hidden sm:block text-sm font-semibold border-x-[1px] text-center">
          {durationLabel}
        </div>
        <div className="pl-6 pr-2 flex flex-row items-center  gap-3    text-sm text-gray-600 ">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
