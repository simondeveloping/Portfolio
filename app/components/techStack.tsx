"use client";

import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1800);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-70vh start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 10 : 1]);
  const layer2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 200 : 200]
  );
  const layer3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 400 : 800]
  );
  const layer4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 600 : 1000]
  );
  const layer5 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 800 : 1200]
  );
  return (
    <div
      ref={ref}
      className="w-full h-[150vh]  relative flex justify-center items-center"
    >
      {/* Layer 1 */}
      <motion.div
        style={{ y: layer1 }}
        className="absolute top-0 lg:left-[30%] left-[10%] flex justify-center items-center layer1 2xl:text-6xl lg:text-4xl text-3xl"
      >
        <img src="/react.svg" alt="React" className="w-10 h-10" />
        React
      </motion.div>
      <motion.div
        style={{ y: layer1 }}
        className="absolute top-[30%] lg:top-[40%] lg:right-[5%] right-[5%] layer1 flex justify-center items-center 2xl:text-6xl lg:text-4xl text-3xl"
      >
        <img src="/firebase.svg" alt="firebase.js" className="w-10 h-10 " />
        Firebase
      </motion.div>
      <motion.div
        style={{ y: layer1 }}
        className="absolute bottom-[30%] lg:left-10 left-0 flex justify-center items-center layer1 2xl:text-6xl lg:text-4xl text-3xl"
      >
        <img src="/typescript.svg" alt="Typescript" className="w-10 h-10" />
        Typescript
      </motion.div>
      <motion.div
        style={{ y: layer1 }}
        className="absolute bottom-[-20%] lg:right-[35%] right-[10%] flex justify-center items-center layer1 2xl:text-6xl lg:text-4xl text-3xl"
      >
        <img src="/nodejs.svg" alt="NodeJs" className="w-10 h-10" />
        node.js
      </motion.div>

      {/* Text Layer */}
      <motion.div style={{ y: layer5 }} className="absolute top-[10%]">
        <h1 className="2xl:text-6xl lg:text-4xl text-2xl 2xl:w-[60vw] lg:w-[70vw] w-[80vw] text-center  !leading-relaxed lora">
          These are the technologies I use in general. I am always open to new
          technologies and love to learn new things.
        </h1>
      </motion.div>
      {/* Layer 2 */}
      <motion.div
        style={{ y: layer2 }}
        className="absolute top-[30%] left-[5%] layer2 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/github.svg" alt="Github" className="w-10 h-10" />
        Github
      </motion.div>
      <motion.div
        style={{ y: layer2 }}
        className="absolute top-[10%] right-[20%] layer2 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/firebase.svg" alt="Firebase" className="w-10 h-10" />
        Firebase
      </motion.div>
      <motion.div
        style={{ y: layer2 }}
        className="absolute bottom-[10%] right-[38%] layer2 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/react.svg" alt="React" className="w-10 h-10" />
        React
      </motion.div>
      <motion.div
        style={{ y: layer2 }}
        className="absolute bottom-[10%] left-[8%] layer2 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
        Vercel
      </motion.div>

      {/* Layer 3 */}
      <motion.div
        style={{ y: layer3 }}
        className="absolute top-[5%] left-[10%] layer3 flex justify-center items-center 2xl:text-4xl lg:text-2xl text-xl"
      >
        <img src="/nextjs.svg" alt="Nextjs" className="w-10 h-10" />
        Next.js
      </motion.div>
      <motion.div
        style={{ y: layer3 }}
        className="absolute top-[10%] left-[35%] layer3 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/tailwind.svg" alt="TailwindCSS" className="w-10 h-10" />
        Tailwind CSS
      </motion.div>
      <motion.div
        style={{ y: layer3 }}
        className="absolute bottom-[50%] left-[30%] layer3 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/react.svg" alt="React" className="w-10 h-10" />
        React
      </motion.div>
      <motion.div
        style={{ y: layer3 }}
        className="absolute bottom-[30%] right-[10%] layer3 flex justify-center items-center 2xl:text-5xl lg:text-3xl text-2xl"
      >
        <img src="/github.svg" alt="Github" className="w-10 h-10" />
        Github
      </motion.div>

      {/* Layer 4 */}
      <motion.div
        style={{ y: layer4 }}
        className="absolute top-[15%] right-[10%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
        <h1>Vercel</h1>
      </motion.div>
      <motion.div
        style={{ y: layer4 }}
        className="absolute top-[20%] left-[20%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/react.svg" alt="React" className="w-10 h-10" />
        <h1>React</h1>
      </motion.div>
      <motion.div
        style={{ y: layer4 }}
        className="absolute bottom-[60%] right-[20%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/firebase.svg" alt="Firebase" className="w-10 h-10" />
        <h1>Firebase</h1>
      </motion.div>
      <motion.div
        style={{ y: layer4 }}
        className="absolute bottom-[40%] left-[20%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
        <h1>Vercel</h1>
      </motion.div>

      {/* Layer 5 */}
      <motion.div
        style={{ y: layer5 }}
        className="absolute top-[0%] right-[40%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/vercel.svg" alt="Vercel" className="w-10 h-10" />
        <h1>Vercel</h1>
      </motion.div>
      <motion.div
        style={{ y: layer5 }}
        className="absolute bottom-[60%] right-[5%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/github.svg" alt="Github" className="w-10 h-10" />
        <h1>Github</h1>
      </motion.div>
      <motion.div
        style={{ y: layer5 }}
        className="absolute bottom-[60%] left-[20%] flex justify-center items-center layer4 2xl:text-4xl lg:text-2xl text-lg"
      >
        <img src="/html.svg" alt="HTML" className="w-10 h-10" />
        <h1>html</h1>
      </motion.div>
    </div>
  );
}
