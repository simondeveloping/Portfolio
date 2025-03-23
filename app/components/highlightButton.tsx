"use client";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function HighlightButton() {
  const [highlighted, setHighlighted] = useState(false);
  return (
    <div
      className={`min-h-screen h-[200vh] flex justify-center items-center flex-col w-full transition-colors duration-500 ${
        highlighted ? "bg-black opacity-80" : "bg-transparent"
      } `}
    >
      <div className=" w-[90vw] lg:w-[70vw] flex justify-center items-center flex-col gap-10">
        <h1 className="text-2xl lg:text-5xl text-cookie font-bold text-center leading-relaxed">
          Im{" "}
          <span className="bg-blue-200 box-decoration-clone px-1">
            currently studying
          </span>{" "}
          &apos;applied Mathematics and Computer science &apos;
        </h1>
        <div className=" flex flex-row gap-10 items-center">
          <ArrowBigRight className="text-cookie" size={32} />
          <a
            href="/About"
            className="p-10 rounded-xl border border-cookie text-cookie text-2xl hover:scale-105 inline-block"
            onMouseEnter={() => setHighlighted(true)}
            onMouseLeave={() => setHighlighted(false)}
            style={{
              textShadow: highlighted
                ? "0 0 10px black, 0 0 20px black"
                : "none",
              borderColor: highlighted ? "white" : "black",
              boxShadow: highlighted
                ? "0 0 10px white, 0 0 20px white"
                : "none",
              color: highlighted ? "white" : "black",
            }}
          >
            {" "}
            <span className="animate-blink text-blue-400">\ </span>
            You can find more about me here
            <span className="text-red-400 animate-blink">\</span>
          </a>
          <ArrowBigLeft className="text-cookie" size={32} />
        </div>
      </div>
    </div>
  );
}
