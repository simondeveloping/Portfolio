"use client";
import { PiChart } from "./components/pi-chart";
import Overlay from "./components/overlay/overlay";
import YearProgress from "./components/yearProgress";
import { VisitorChart } from "./components/bar-chart";
import Feedback from "./components/feedback";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";
import { Toaster } from "../components/ui/sonner";
import InifiniteScroll from "./components/infiniteScroll";
import BackgroundChanger from "./components/BackgroundChanger";
import HighlightButton from "./components/highlightButton";
import TechStack from "./components/techStack";
import ScrollBar from "./components/ScrollBarAnimation";
import PuzzleOpen from "./components/puzzleOpen";
import { Pi } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Overlay color1={"bg-[#004f79]"} color2={"bg-[#0070ad]"} />

      <BackgroundChanger />

      <div className="flex h-screen justify-start items-center pt-20 2xl:pt-40 text-cookie flex flex-col gap-20">
        <div className="text-4xl lg:text-8xl font-bold flex flex-row">
          <span className="animate-blink text-red-400">[&nbsp; </span>
          simonp.one
          <span className="animate-blink text-blue-400">&nbsp;]</span>
        </div>
        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-center">
          Designed to show off.
        </h1>
      </div>
      <div className="h-auto flex items-center flex-col mb-80">
        <div className="flex justify-center items-center h-[150vh] w-[90vw] lg:w-[70vw]">
          <h1 className="text-2xl lg:text-4xl 2xl:text-6xl 3xl:text-8xl font-normal text-center !leading-relaxed text-cream lora">
            Hello, I&apos;m Simon. This is my portfolio website, where I share
            my projects, insights, and experiences. I really enjoyed building
            this portfolio. I hope you enjoy!
          </h1>
        </div>
      </div>
      <div className="h-[200vh]">
        <TechStack />
      </div>
      <HighlightButton />
      <div className="h-[30vh]"></div>
      <div className="h-screen flex w-full justify-center lg:flex-row flex-col">
        <div className=" w-full p-5 lg:w-1/3  flex text-cookie flex-col gap-10">
          <h1 className="2xl:text-3xl lg:text-2xl text-xl leading-relaxed">
            Fugit voluptatem vel eaque delectus minus. Et quam eveniet fugiat
            repellat. Consequatur debitis ea cumque autem voluptatem accusamus
            sit velit enim.
          </h1>
          <p className="text-xl">- Morphius -</p>
        </div>
        <div className=" w-full p-5 lg:w-1/3  flex mt-[20%] text-cookie flex-col gap-10">
          <h1 className="2xl:text-3xl lg:text-2xl text-xl leading-relaxed">
            Praesentium et reiciendis quasi. Laborum sit eius minus. Perferendis
            perferendis quia nihil ut eos eligendi. Quo dolorem delectus.
            Perferendis voluptas hic excepturi.
          </h1>
          <p className="text-xl">- Caesar -</p>
        </div>
      </div>
      <PuzzleOpen />
      <div className="h-[80vh]"></div>

      <div className="h-auto flex flex-col">
        <div className="flex justify-center w-full h-auto mb-40 p-5">
          <h1 className="text-4xl lg:text-6xl text-cookie 2xl:w-1/2 lg:w-3/4 lora text-center">
            Here are some information about this page
          </h1>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-20">
          <div className="w-full lg:w-3/4 flex justify-around h-auto lg:flex-row flex-col p-5 gap-5">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-center gap-5">
              <h1 className="text-2xl lg:text-4xl text-cookie">
                - Browser Usage -
              </h1>
              <h1 className="text-xl lg:text-3xl text-cookie text-center lora items-center justify-center flex ">
                {" "}
                This section shows the distribution of browsers used by visitors
                in 2025. By understanding which browsers are most popular, I can
                ensure the website runs smoothly across all platforms. It&apos;s
                valuable insight for improving user experience and optimizing
                performance.
              </h1>
            </div>
            <PiChart />
          </div>
          <div className="w-full lg:w-3/4 flex lg:flex-row gap-5 flex-col-reverse p-5 gap-5">
            <VisitorChart />
            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center gap-5">
              <h1 className="text-cookie lg:text-4xl text-2xl">
                - Total Visitor -
              </h1>
              <h1 className="text-xl lg:text-3xl text-cookie text-center lora items-center justify-center flex ">
                This data provides a valuable look at when and how people
                interact with my website. For me, it&apos;s fascinating to see
                which months or events drive the most engagement. Understanding
                these trends helps me improve the site and better connect with
                visitors.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh]"></div>
      <h1 className="text-4xl lg:text-6xl text-cookie lora text-center">
        You have feedback?
      </h1>
      <div className="h-[10vh]"></div>
      <Feedback />
      <div className="h-[50vh]"></div>

      <Toaster />
      <Footer />
    </div>
  );
}
