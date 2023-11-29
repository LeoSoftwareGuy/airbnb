"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProp {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing filters",
  showReset,
}: EmptyStateProp) => {
  const router = useRouter();
  return (
    <div
      className="
  flex
  flex-col
  gap-2
  items-center
  justify-center
  h-[60vh]"
    >
      <Heading title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
