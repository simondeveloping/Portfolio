"use client";
import { PiChart } from "./shadcn/pi-chart";
import { PageNavigation } from "./shadcn/pagination";
import Overlay from "./components/overlay";
import YearProgress from "./components/yearProgress";
import { VisitorChart } from "./shadcn/bar-chart";
export default function Home() {
  return (
    <div>
      <Overlay color1={"bg-[#004f79]"} color2={"bg-[#0070ad]"} />
      <div className="flex h-screen justify-center items-center flex-grow bg-white dark:bg-blay">
        <div className="text-3xl text-black dark:text-white">
          <span className="animate-blink text-red-400">[ </span>simonp.one/
          <span className="animate-blink text-blue-400"> ]</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="flex w-[30vw] bg-white h-auto justify-center items-center flex-wrap">
          <YearProgress />
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-0"></div>
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-100"></div>
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-200"></div>
          <div className="w-8 h-8 bg-blue-200 opacity-0 animate-snake delay-300"></div>
        </div>
      </div>
      <div className="flex h-auto bg-white text-black justify-center p-20">
        <div className="flex justify-between w-[70vw] items-center">
          <div className="text-2xl w-[30vw]">
            <VisitorChart />
          </div>
          <div className="justify-end ">
            <PiChart />
          </div>
        </div>
      </div>
      <div className="flex h-[10vh] justify-end">
        <div className="w-[30vw] bg-white"></div>
      </div>
      <div className="flex md:h-70[vh] w-[100vw] justify-center p-20 h-auto">
        <div className="md:w-[70vw] flex flex-row gap-20 flex-wrap w-[90vw] lg:h-[80vh] 2xl:h-[50vh]">
          <div className="flex md:w-[30vw] h-auto flex-col justify-start items-start">
            <div className="p-4 lg:text-3xl text-xl md:text-1xl 2xl:text-4xl">
              <span className="animate-blink text-green-400">[ </span>
              Mini-Projects
              <span className="animate-blink text-yellow-400"> ]</span>
            </div>
            <div className="md:p-10 md:text-base text-base 2xl:text-2xl">
              This is a section for my own projects. The goal of these projects
              is to simplify everday life. They are still in progress...
            </div>
          </div>
          <div className="flex w-auto items-center justify-center gap-5 flex-col">
            <PageNavigation />
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex flex-row">
        <div className="border-t-2 border-zinc-600 border-r-2 h-100 w-[30vw]"></div>
        <div className="border-b-2 border-zinc-600 w-[70vw] h-100"></div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
