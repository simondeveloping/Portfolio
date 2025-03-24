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
    <div className="perspective relative 2xl:h-[100vh] xl:h-[150vh] lg:h-[100vh] max-h-[150vh] w-[95vw] mb-80">
      {/* Hinterste Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center opacity-40 text-2xl lg:text-3xl 2xl:text-4xl overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5 - 800}px)` }}
      >
        <div className="absolute top-[0%] right-[15%] flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>
        <div className="absolute top-[10%] left-[10%] flex flex-row">
          <img src="/react.svg" alt="React" className="w-10 h-10" />
          React
        </div>
        <div className="absolute top-[0%] left-[50%] flex-row flex">
          <img src="/firebase.svg" alt="firebase.js" className="w-10 h-10" />
          Firebase
        </div>
        <div className="absolute top-[30%] right-[25%] flex flex-row">
          <img src="/github.svg" alt="Github" className="w-10 h-10" />
          Github
        </div>
        <div className="absolute bottom-[50%] left-[5%] flex flex-row">
          <img src="/nextjs.svg" alt="TailwindCSS" className="w-10 h-10" />
          Next.js
        </div>
      </div>
      {/* Text Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center text-3xl lg:text-4xl 2xl:text-5xl"
        style={{ transform: `translateY(${scrollY * 0.4 - 800}px)` }}
      >
        <div className="flex justify-center items-center w-[90vw] lg:w-[70vw]">
          <h1 className="font-semibold text-center leading-relaxed text-2xl lg:text-5xl text-white">
            These are the technologies I use to build this website.
          </h1>
        </div>
      </div>
      {/* Mittlere Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center opacity-70 text-3xl lg:text-4xl 2xl:text-5xl "
        style={{ transform: `translateY(${scrollY * 0.3 - 400}px)` }}
      >
        <div className="absolute top-[40%] right-[5%] flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>

        <div className="absolute top-[10%] left-[35%] flex-row flex">
          <img src="/github.svg" alt="Github" className="w-10 h-10" />
          Github
        </div>
        <div className="absolute top-[80%] left-[50%] flex flex-row">
          <img src="/firebase.svg" alt="Firebase" className="w-10 h-10" />
          Firebase
        </div>
        <div className="absolute bottom-[30%] right-[15%] flex-row flex">
          <img src="/tailwind.svg" alt="TailwindCSS" className="w-10 h-10" />
          TailwindCSS
        </div>
        <div className="absolute top-[-5%] left-[20%] flex flex-row">
          <img src="/nodejs.svg" alt="Node.js" className="w-10 h-10" />
          Node.js
        </div>
        <div className="absolute bottom-[10%] left-[5%] flex flex-row">
          <img src="/nextjs.svg" alt="Next.js" className="w-10 h-10" />
          Next.js
        </div>
        <div className="absolute bottom-[20%] right-[60%] flex flex-row">
          <img src="/typescript.svg" alt="TypeScript" className="w-10 h-10" />
          TypeScript
        </div>
      </div>

      {/* Vorderste Ebene */}
      <div
        className="parallax-layer absolute inset-0 flex justify-center items-center text-3xl lg:text-5xl 2xl:text-6xl"
        style={{ transform: `translateY(${scrollY * 0.001 - 30}px)` }}
      >
        <div className="absolute top-[40%] right-[20%]  flex flex-row">
          <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
          Vercel
        </div>
        <div className="absolute bottom-[-30%] left-[10%] flex flex-row">
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
        <div className="absolute bottom-[-10%] right-[5%] flex flex-row">
          <img src="/typescript.svg" alt="TypeScript" className="w-10 h-10" />
          TypeScript
        </div>
        <div className="absolute bottom-[-60%] right-[5%] flex flex-row">
          <img src="/nextjs.svg" alt="TailwindCSS" className="w-10 h-10" />
          Next.js
        </div>
      </div>
    </div>
  );
}
