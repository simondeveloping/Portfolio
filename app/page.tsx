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
export default function Home() {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableColorScheme={true}
        enableSystem={true}
        disableTransitionOnChange
      >
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
        <PuzzleOpen />
        {/*<ScrollBar /> */}
        <div className="h-[200vh] w-full flex justify-center items-center">
          <div className="w-[90vw] lg:w-[70vw] flex justify-center items-center flex-col gap-10">
            <h1 className="font-bold  text-6xl text-transparent stroke-red stroke-[2px]">
              hallo
            </h1>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[30vw] border-gray-500 border-t-2 border-r-2 h-[10vh]"></div>
          <div className="w-[70vw] border-b-2 border-gray-500"></div>
        </div>
        <div className="p-10">
          <YearProgress />
        </div>
        <div className="w-full flex lg:flex-row justify-between h-auto flex-col-reverse">
          <VisitorChart />
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-1 lg:gap-5">
            {" "}
            <h1 className="text-3xl font-bold">Total Visitors Overview</h1>
            <p className="p-10">
              Welcome to the visitor insights for 2025. This data provides a
              valuable look at when and how people interact with my website. For
              me, it&apos;s fascinating to see which months or events drive the
              most engagement. Understanding these trends helps me improve the
              site and better connect with visitors.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row justify-between h-auto mb-20 flex-col">
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-1 lg:gap-5 p-10">
            <h1 className="text-3xl font-bold">Browser Usage</h1>
            <p>
              This section shows the distribution of browsers used by visitors
              in 2025. By understanding which browsers are most popular, I can
              ensure the website runs smoothly across all platforms. It&apos;s
              valuable insight for improving user experience and optimizing
              performance.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <PiChart />
          </div>
        </div>

        <div className="w-full h-[10vh] flex flex-row">
          <div className="w-[70vw] border-b-2 border-gray-500"></div>
          <div className="w-[30vw] border-l-2 border-t-2 border-gray-500"></div>
        </div>
        <h1 className="text-6xl font-bold p-10">
          <span className="text-red-400">G</span>ot{" "}
          <span className="text-red-400">f</span>eedback&nbsp;?
        </h1>

        <Feedback />
        <div className="h-screen"></div>

        <Toaster />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
