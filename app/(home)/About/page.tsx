"use client";
import { Progress } from "@/components/ui/progress";
import OverlayCircle from "../../components/overlay/overlayCircle";
import { use, useEffect, useRef } from "react";
export default function Portfolio() {
  const currentDate = new Date();
  const startDate = new Date("2023-09-01");
  const endDate = new Date("2026-07-01");
  const progress =
    ((currentDate.getTime() - startDate.getTime()) /
      (endDate.getTime() - startDate.getTime())) *
    100;

  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      const sr = ScrollReveal();

      sr.reveal(".animate-on-scroll", {
        distance: "50px", // Wie weit sich das Element bewegt
        duration: 1000, // Dauer der Animation
        delay: 200, // Verzögerung vor der Animation
        opacity: 80, // Anfangs-Opazität
        reset: false, // Animation wiederholt sich, wenn das Element erneut in den Viewport kommt
        scale: 0.9, // Skaliert das Element
        easing: "ease-in-out", // Bewegungs-Easing
      });
    };
    loadScrollReveal();
  }, []);

  return (
    <div>
      <OverlayCircle color1={"bg-[#e8005f]"} color2={"bg-[#a20043]"} />
      <div className="flex h-auto justify-center flex-wrap gap-10 mb-40">
        <div className="flex justify-center flex-row flex-wrap w-ful lg:p-20 gap-5">
          <h1 className="text-4xl lg:text-8xl font-bold">Hello </h1>
          <h1 className="text-4xl lg:text-8xl font-bold">I&apos;m </h1>
          <h1 className="text-4xl lg:text-8xl font-bold">Simon</h1>
        </div>
        <div className="w-[90vw] min-h-[80vh] flex flex-wrap justify-around">
          <div className="flex flex-col-reverse lg:flex-row w-full lg:w-2/3 justify-start gap-5">
            <div className="w-full lg:w-1/2 gap-5 flex flex-col p-2 lg:p-5">
              <h1 className="font-bold dark:text-gray-400 text-gray-600 text-2xl">
                BIOGRAPHY
              </h1>
              <p className="text-lg">
                Hello I&apos;m Simon. I am a software developer from Germany. I
                am currently studying Applied Mathematics and Computer Science
                at the University. I have been working on various projects for
                over a year now. I am passionate about software development and
                I am always looking for new challenges. I am currently working
                on my own portfolio to present my skills and projects in a clear
                and structured way. I am looking forward to new projects and
                challenges. Feel free to contact me if you have any questions or
                if you would like to work with me.
              </p>
              <p>
                I&apos;m currently learning Next JS with Typescript and Tailwind
                CSS🚀
              </p>
            </div>
            <div className="w-full lg:w-1/2 border border-blay dark:border-white rounded-3xl max-h-[70vh] dark:shadow-[9px_9px_0px_0px_#ffffff] shadow-[9px_9px_0px_0px_#000000] p-5 ">
              <img
                src="/cat.jpg"
                alt="Simon"
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" justify-around lg:w-1/6 w-full flex flex-row lg:items-end gap-10 lg:flex-col items-start lg:mt-0 mt-5 ">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl lg:text-7xl flex justify-end animate-on-scroll">
                1 +
              </h1>
              <p className="dark:text-gray-300 text-gray-700 lg:text-2xl text-lg">
                Projects
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl lg:text-7xl flex justify-end animate-on-scroll">
                1.5 +
              </h1>
              <p className="dark:text-gray-300 text-gray-700 text-lg lg:text-2xl">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <h1 className="font-bold text-4xl lg:text-7xl flex justify-end animate-on-scroll">
                20 +
              </h1>
              <p className="dark:text-gray-300 text-gray-700 text-lg lg:text-2xl">
                Motivation Points
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Experience
      </h1>
      <div className="flex justify-center w-full mb-20 lg:mb-40">
        <div className="w-[80vw] lg:w-[50vw] gap-5 flex flex-row">
          <div className="text-8xl lg:pr-10 text-blue-200">•</div>
          <div className="lg:gap-4 gap-2 flex flex-col w-full">
            <h1 className="text-base lg:text-2xl">Software developer</h1>
            <p className="text-gray-400 text-xl">(2023 - 2026) | RWTH Aachen</p>
            <Progress value={progress} />
          </div>
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Education
      </h1>
      <div className="flex justify-center w-full mb-20 lg:mb-40 lg:mt-10 mt-2">
        <div className="w-[80vw] lg:w-[50vw] flex flex-row relative">
          <ul className="2xl:gap-40 gap-20 flex flex-col list-disc">
            <li className="gap-4 flex items-center">
              <div className="text-8xl lg:pr-10 text-blue-200 ">•</div>
              <div className="lg:gap-4 gap-2 flex flex-col w-full">
                <h1 className="text-base lg:text-2xl">(High) School</h1>
                <p className="text-gray-400 text-xl">(2015 - 2023) | School</p>
                <Progress value={100} />
              </div>
            </li>
            <li className="gap-4 flex items-center">
              <div className="text-8xl lg:pr-10 text-blue-200">•</div>
              <div className="lg:gap-4 gap-2 flex flex-col">
                <h1 className="text-base lg:text-2xl">
                  {" "}
                  Bachelor of Science in &apos;Applied Mathematics and Computer
                  Science&apos;
                </h1>
                <p className="text-gray-200"></p>
                <p className="text-gray-400 text-xl">
                  (2023 - 2026) | University
                </p>
                <Progress value={progress} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Skills
      </h1>
      <div className="flex justify-center w-full "></div>
    </div>
  );
}
