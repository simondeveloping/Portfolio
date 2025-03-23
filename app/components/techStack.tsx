"use client";
import { useEffect, useState } from "react";

export default function TechStack() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="perspective relative h-[150vh] w-[90vw]">
      {/* Hinterste Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center opacity-40 text-2xl lg:text-3xl overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.3 - 600}px)` }}
      >
        <div className="absolute top-[5%] right-[15%] flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>
        <div className="absolute top-[20%] left-[10%] flex flex-row">
          <img src="/react.svg" alt="React" className="w-10 h-10" />
          React
        </div>
        <div className="absolute top-[15%] left-[40%] flex flex-row">
          <img src="/firebase.svg" alt="Firebase" className="w-10 h-10" />
          Firebase
        </div>
        <div className="absolute top-[10%] right-[25%] flex flex-row">
          <img src="/github.svg" alt="Github" className="w-10 h-10" />
          Github
        </div>
        <div className="absolute bottom-[25%] left-[5%] flex flex-row">
          <img src="/nextjs.svg" alt="TailwindCSS" className="w-10 h-10" />
          Next.js
        </div>
        <div className="absolute bottom-[20%] right-[30%] flex flex-row">
          <img src="/typescript.svg" alt="TypeScript" className="w-10 h-10" />
          TypeScript
        </div>
      </div>

      {/* Mittlere Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center opacity-70 text-3xl lg:text-4xl "
        style={{ transform: `translateY(${scrollY * 0.2 - 250}px)` }}
      >
        <div className="absolute top-[40%] right-[5%] flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>
        <div className="absolute top-[15%] left-[50%] flex-row flex">
          <img src="/firebase.svg" alt="firebase.js" className="w-10 h-10" />
          Firebase
        </div>
        <div className="absolute top-[20%] left-[35%] flex-row flex">
          <img src="/github.svg" alt="Github" className="w-10 h-10" />
          Github
        </div>
        <div className="absolute bottom-[30%] right-[15%] flex-row flex">
          <img src="/tailwind.svg" alt="TailwindCSS" className="w-10 h-10" />
          TailwindCSS
        </div>
        <div className="absolute top-[10%] left-[20%] flex flex-row">
          <img src="/nodejs.svg" alt="Node.js" className="w-10 h-10" />
          Node.js
        </div>
        <div className="absolute bottom-[10%] left-[5%] flex flex-row">
          <img src="/nextjs.svg" alt="Next.js" className="w-10 h-10" />
          Next.js
        </div>
        <div className="absolute bottom-[20%] right-[30%] flex flex-row">
          <img src="/typescript.svg" alt="TypeScript" className="w-10 h-10" />
          TypeScript
        </div>
      </div>

      {/* Text Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center text-3xl lg:text-4xl "
        style={{ transform: `translateY(${scrollY * 0.1 - 200}px)` }}
      >
        <div className="flex justify-center items-center w-[90vw] lg:w-[70vw]">
          <h1 className="font-semibold text-center leading-relaxed text-2xl lg:text-5xl text-white">
            These are the technologies I use to build this website.
          </h1>
        </div>
      </div>

      {/* Vorderste Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center text-3xl lg:text-5xl"
        style={{ transform: `translateY(${scrollY * 0.001 - 30}px)` }}
      >
        <div className="absolute top-[20%] right-[20%]  flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>
        <div className="absolute bottom-[10%] left-[40%] flex flex-row">
          <img src="/react.svg" alt="React" className="w-10 h-10" />
          React
        </div>
        <div className="absolute top-[15%] left-[8%] flex flex-row">
          <img src="/vscode.svg" alt="VSCode" className="w-10 h-10" />
          VSCode
        </div>
        <div className="absolute top-[2%] right-[10%] flex flex-row">
          <img src="/tailwind.svg" alt="TailwindCSS" className="w-10 h-10" />
          JavaScript
        </div>
        <div className="absolute bottom-[20%] left-[10%] flex flex-row">
          <img src="/firebase.svg" alt="firebase" className="w-10 h-10" />
          Firebase
        </div>
        <div className="absolute bottom-[20%] right-[5%] flex flex-row">
          <img src="/git.svg" alt="Git" className="w-10 h-10" />
          Git
        </div>
      </div>
    </div>
  );
}
