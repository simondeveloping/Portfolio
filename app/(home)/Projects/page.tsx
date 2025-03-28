import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overlay from "../../components/overlay/overlay";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <div className="dark:bg-blay ">
        <Overlay color1={"bg-[#eabfff]"} color2={"bg-[#d580ff]"} />
        <div className="w-full h-[20vh] flex justify-center items-center mb-20">
          <h1 className="text-blay dark:text-white lg:text-8xl font-bold text-7xl">
            Projects
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[90vw] flex border border-blay dark:border-white text-blay dark:text-white p-4 rounded-3xl min-h-[50vh] h-auto lg:w-[80vw] dark:shadow-[9px_9px_0px_0px_#f0efed] shadow-[10px_10px_0px_0px_#000000] lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full bg-cover bg-no-repeat overflow-hidden relative flex justify-center items-center flex-col gap-4">
              <div className=" w-full lg:h-5/6 lg:w-5/6 h-auto relative overflow-hidden rounded-xl">
                <Image
                  src="/simonp.png"
                  width={650}
                  height={900}
                  alt="Test"
                  className="lg:w-full lg:h-full lg:max-h-[1000px] lg:max-w-[5000px] max-h-[400px] max-w-[400px] object-cover hover:scale-110 transform transition-transform duration-300 "
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-start p-4 flex-col gap-2 lg:gap-5">
              <h1 className="text-teal-300">3D Website</h1>
              <h1 className="text-xl lg:text-4xl font-bold">
                <span className="animate-blink text-red-400">[</span>3D Website
                <span className="animate-blink text-blue-400">]</span>
              </h1>
              <p className="text-base lg:text-xl">
                A 3D Website with Three.js and React.js
              </p>
              <Link href="https://github.com/simondeveloping/Portfolio">
                <div className="text-2xl lg:text-4xl flex flex-row gap-5">
                  <FontAwesomeIcon icon={faGithub} className="p-3" />
                  <div className=" rounded-xl bg-blay dark:bg-white text-white dark:text-blay p-1 lg:p-3 flex items-center justify-center hover:scale-105 duration-300 transform transition-transform">
                    <h1 className="text-base lg:text-xl">Visit Project</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-auto w-full flex flex-row mt-20 justify-center flex-wrap">
          <div className="lg:w-[80vw] w-[100vw] flex justify-center lg:justify-between flex-wrap gap-y-20">
            <div className="flex items-center ">
              <div className="h-auto lg:w-auto 2xl:min-w-[35vw] 2xl:max-w-[40vw] lg:max-w-[35vw] w-[90vw] flex border border-blay dark:border-white text-blay dark:text-white flex-col items-center p-6 rounded-3xl dark:shadow-[9px_9px_0px_0px_#ffffff] shadow-[10px_10px_0px_0px_#000000]">
                <div className="w-full h-auto lg:h-[40vh] relative overflow-hidden rounded-xl">
                  <Image
                    src="/test.jpg"
                    width={650}
                    height={200}
                    alt="Test"
                    className="lg:full lg:full lg:max-h-[700px] lg:max-w-[800px] max-h-[300px] max-w-[300px] object-cover hover:scale-110 transform transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="flex justify-start items-start pt-3 w-full flex-col gap-1">
                  <h1 className="text-xl text-teal-300">Windows App</h1>
                  <h1 className="text-2xl">Electron? Javascript?</h1>
                  <Link
                    href="https://github.com/simondeveloping"
                    className="flex flex-row gap-3 p-2 hover:text-red-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <h1 className="rounded-xl dark:bg-white bg-blay text-white dark:text-blay pl-3 pr-3 flex items-center justify-center hover:scale-110 duration-300 transform transition-transform text-xl ">
                      Visit{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="h-auto lg:w-auto 2xl:min-w-[35vw]  2xl:max-w-[40vw] lg:max-w-[35vw] w-[90vw] flex border border-blay dark:border-white text-blay dark:text-white flex-col items-center p-6 rounded-3xl dark:shadow-[10px_10px_0px_0px_#ffffff] shadow-[9px_9px_0px_0px_#000000]">
                <div className="w-full h-auto lg:h-[40vh] relative overflow-hidden rounded-xl">
                  <Image
                    src="/test.jpg"
                    width={650}
                    height={200}
                    alt="Test"
                    className="lg:full lg:full lg:max-h-[700px] lg:max-w-[700px] max-h-[300px] max-w-[300px] object-cover hover:scale-110 transform transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="flex justify-start items-start pt-3 w-full flex-col gap-1">
                  <h1 className="text-xl text-teal-300">
                    In Progress: Own App?
                  </h1>
                  <h1 className="text-2xl">Own App with Swift?</h1>
                  <Link
                    href="https://github.com/simondeveloping"
                    className="flex flex-row gap-3 p-2 hover:text-blue-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <h1 className="rounded-xl dark:bg-white bg-blay text-white dark:text-blay pl-3 pr-3 flex items-center justify-center hover:scale-110 duration-300 transform transition-transform text-xl ">
                      Visit{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
