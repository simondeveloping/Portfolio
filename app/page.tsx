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
import SnakeOverlay from "./components/overlay/SnakeOverlay";
import InifiniteScroll from "./components/infiniteScroll";
import Bubble from "./components/bubble";
import LittleSquare from "./components/littleSquare";
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

        <div className="flex h-screen justify-center items-start pt-40">
          <div className="text-4xl lg:text-8xl font-bold flex flex-row">
            <span className="animate-blink text-red-400">[&nbsp; </span>
            simonp.one
            <span className="animate-blink text-blue-400">&nbsp;]</span>
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
        <div className="mb-20"></div>
        <div className="flex flex-row ">
          <div className="w-[40vw] border-gray-500 border-t-2 border-r-2 h-[10vh] dark:bg-gray-800"></div>
          <div className="w-[60vw] border-b-2 border-gray-500"></div>
        </div>
        <div className="flex justify-end dark:bg-gray-800">
          <h1 className="text-6xl p-10 font-bold">
            <span className="text-blue-300">T</span>ech{" "}
            <span className="text-blue-300">S</span>tack
          </h1>
        </div>
        <div className="w-full overflow-hidden relative bg-white dark:bg-gray-800 lg:p-10 ">
          <InifiniteScroll />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="flex flex-row ">
          <div className="w-[70vw] border-gray-500 border-t-2 border-r-2 h-[10vh]"></div>
          <div className="w-[30vw] border-b-2 border-gray-500 dark:bg-gray-800"></div>
        </div>
        <Toaster />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
