"use client";

import { Coffee } from "lucide-react";

export default function Error() {
  return (
    <div className="bg-white dark:bg-blay">
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl text-blay dark:text-white">Error - Oops</h1>
        <h1 className="text-4xl text-blay dark:text-white">
          Maybe you should take a break?
        </h1>
        <Coffee className="text-blay dark:text-white w-8 h-8" />
      </div>
    </div>
  );
}
