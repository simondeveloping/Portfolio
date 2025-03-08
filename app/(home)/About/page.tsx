"use client";
import { Progress } from "@/components/ui/progress";
import OverlayCircle from "../../components/overlay/overlayCircle";
import { useEffect, useRef } from "react";
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
        <div className="flex justify-center flex-row flex-wrap w-ful lg:p-20 lg:gap-5">
          <h1 className="text-4xl lg:text-8xl font-bold">Hello </h1>
          <h1 className="text-4xl lg:text-8xl font-bold">I&apos;m </h1>
          <h1 className="text-4xl lg:text-8xl font-bold">Simon</h1>
        </div>
        <div className="w-[90vw] min-h-[80vh] flex flex-wrap justify-around">
          <div className="w-1/3 gap-5 flex flex-col p-5">
            <h1 className="font-bold dark:text-gray-400 text-gray-600 text-2xl">
              BIOGRAPHY
            </h1>
            <p className="text-base">
              Consectetur est vel maiores facilis nisi dolores. Porro porro
              quidem repudiandae eum est inventore cumque iure. Rem inventore et
              aut. Voluptatibus ut ea est dignissimos et alias tempore. Quia
              occaecati asperiores maxime culpa voluptas occaecati perspiciatis.
              Inventore eaque doloremque quibusdam unde qui voluptas repellendus
              neque hic. Et odit veniam iusto ad consequatur illum ut dolores
              perspiciatis. Dolorum quia sed cum molestiae aut fugit dolorum
              beatae. Sapiente maiores deserunt suscipit dignissimos quo fuga.
              Numquam nostrum excepturi atque earum. Atque excepturi et ut ut.
              Est iste natus recusandae ut eum officia dolor unde. Nihil
              voluptas voluptatem sed architecto. Quos delectus sit debitis
              voluptatem illo rerum.
            </p>
          </div>
          <div className="w-1/3 border border-blay dark:border-white rounded-3xl max-h-[70vh] dark:shadow-[9px_9px_0px_0px_#ffffff] shadow-[9px_9px_0px_0px_#000000] p-10 ">
            <img src="/test.jpg" alt="Simon" className="rounded-3xl" />
          </div>
          <div className=" justify-around lg:w-1/5 w-full flex flex-row items-end gap-10 lg:flex-col">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-7xl flex justify-end">1 +</h1>
              <p className="dark:text-gray-300 text-gray-700 text-2xl">
                Projects
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-7xl flex justify-end ">1.5 +</h1>
              <p className="dark:text-gray-300 text-gray-700 text-2xl">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <h1 className="font-bold text-7xl flex justify-end">20 +</h1>
              <p className="dark:text-gray-300 text-gray-700 text-2xl">
                Motivation Points
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Experience
      </h1>
      <div className="flex justify-center w-full mb-40">
        <div className="w-[70vw] lg:w-[40vw] gap-5 flex flex-col">
          <h1 className="text-base lg:text-2xl">Software developer</h1>
          <p className="text-gray-400 text-xl">(2023 - 2026) | RWTH Aachen</p>
          <Progress value={progress} />
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Education
      </h1>
      <div className="flex justify-center w-full mb-40">
        <div className="w-[70vw] lg:w-[40vw] gap-5 flex flex-col">
          <h1 className="text-base lg:text-2xl">
            Bachelor of Science in &apos;Applied Mathematics and Computer
            Science&apos;
          </h1>
          <p className="text-gray-400 text-xl">(2023 - 2026) | University</p>
          <Progress value={progress} />
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-bold text-center p-20 animate-on-scroll">
        Tech Stack
      </h1>
      <div className="flex justify-center w-full "></div>
    </div>
  );
}
