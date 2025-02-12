import { PiChart } from "./shadcn/pi-chart";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageNavigation } from "./shadcn/pagination";
import Overlay from "./components/overlay";

export default function Home() {
  return (
    <div>
      <Overlay />
      <div className="flex h-screen justify-center items-center flex-grow">
        <div className="text-3xl">
          <span className="animate-blink text-red-400">[ </span>simonp.one/
          <span className="animate-blink text-blue-400"> ]</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="flex w-[30vw] bg-white h-[10vh] justify-around items-center">
          <h1 className="text-black lg:text-3xl sm:text-base">
            Links<span className="text-teal-500">/</span>
          </h1>
          <a href="https://www.instagram.com/simonp_25">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-red-500 w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-12 lg:w-8 lg:h-8 animate-[spin_3s_linear_infinite]"
              href="https://www.instagram.com/"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-500 w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-12 lg:w-8 lg:h-8"
            />
          </a>
          <a href="https://github.com/simondeveloping">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-lime-300  w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-12 lg:w-8 lg:h-8 animate-[bounce_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-0"></div>
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-100"></div>
          <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-200"></div>
          <div className="w-8 h-8 bg-blue-200 opacity-0 animate-snake delay-300"></div>
        </div>
      </div>
      <div className="flex h-auto bg-white text-black justify-center p-40">
        <div className="flex justify-between w-[70vw] items-center">
          <div className="">testsets</div>
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
            <div className="p-4 lg:text-4xl text-xl md:text-1xl xl:text-4xl">
              <span className="animate-blink text-green-400">[ </span>
              Mini-Projects
              <span className="animate-blink text-yellow-400"> ]</span>
            </div>
            <div className="md:p-10 md:text-xl text-base">
              This is a section for my own projects. The goal of these projects
              is to simplify everday life. They are still in progress...
            </div>
          </div>
          <div className="flex w-auto items-center justify-center gap-5 flex-col">
            <PageNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
