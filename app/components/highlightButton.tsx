"use client";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function HighlightButton() {
  const [highlighted, setHighlighted] = useState(false);
  return (
    <div
      className={`min-h-screen h-auto flex justify-center items-center flex-col w-full transition-colors duration-500 ${
        highlighted ? "bg-black opacity-80" : "bg-transparent"
      } mt-40`}
    >
      <div className=" w-[90vw] lg:w-[70vw] flex justify-center items-center flex-col gap-10">
        <h1 className="text-2xl 2xl:text-6xl lg:text-4xl text-cookie text-center !leading-relaxed lora">
          I&apos;m{" "}
          <span className="bg-blue-200 box-decoration-clone px-1">
            currently studying
          </span>{" "}
          applied Mathematics and Computer science. Moreover I&apos;m working as
          a Software Developer at RWTH Aachen University.
        </h1>
        <p className="text-cookie 2xl:text-5xl lg:text-3xl lora">
          You can find more about me&nbsp;
          <Link
            href="/About"
            className="text-blue-400 underline hover:animate-rainbow"
          >
            here
          </Link>
        </p>
        <div className=" flex flex-row gap-10 items-center"></div>
      </div>
    </div>
  );
}
