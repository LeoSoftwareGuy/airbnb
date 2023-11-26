"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput = ({
  icon: Icon,
  label,
  selected,
  onClick,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
  p-4
  flex
  flex-col
  gap-3
  rounded-xl
  border-2
  transition
  cursor-pointer
  hover:border-black
  ${selected ? "border-black" : "border-neutral-200"}
  `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
