import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function FancyGate() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Smooth animation
  const rawProgress = useMotionValue(0);
  const springProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 20,
  });

  // transformierte Werte für Türen
  const leftDoorX = useTransform(
    springProgress,
    (p) => (-p * window.innerWidth) / 2
  );
  const rightDoorX = useTransform(
    springProgress,
    (p) => (p * window.innerWidth) / 2
  );
  const handleX = useTransform(springProgress, (p) => -p * window.innerWidth);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const total = rect.height - windowHeight;
        const scrolled = -rect.top;
        const localProgress = Math.min(Math.max(scrolled / total, 0), 1);
        setProgress(localProgress);
        rawProgress.set(localProgress);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [rawProgress]);

  return (
    <div className="h-auto">
      <div ref={wrapperRef} className="h-[300vh] relative">
        <div className="h-[60vh] bg-cookie"></div>

        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative w-full h-full justify-center items-center flex">
            {/* Linke Tür */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-cookie z-10"
              style={{
                width: "52%",
                x: leftDoorX,
              }}
            >
              <div className="absolute top-[70%] left-full bg-cookie rounded-r-full h-[10vh] w-[5vh] lg:h-[20vh] lg:w-[10vh] flex items-center justify-center text-2xl text-white z-10"></div>
              <div className="absolute top-40 left-full bg-cookie rounded-r-full h-[10vh] w-[5vh] lg:h-[20vh] lg:w-[10vh] flex items-center justify-center text-2xl text-white z-10"></div>
            </motion.div>

            {/* Rechte Tür */}
            <motion.div
              className="absolute top-0 right-0 h-full bg-cookie z-[1]"
              style={{
                width: "52%",
                x: rightDoorX,
              }}
            >
              <div className="absolute top-40 left-[90%] bg-cream rounded-r-full h-[20vh] lg:w-[15vh] flex items-center justify-center text-2xl text-white z-[0]"></div>
              <div className="absolute top-[70%] right-[90%] bg-cream rounded-r-full h-[20vh] lg:w-[15vh] flex items-center justify-center text-2xl text-white z-[0]"></div>
            </motion.div>

            {/* Text */}
            <div className="flex items-center justify-center text-center text-cookie text-3xl lg:text-4xl z-[-10] w-1/2">
              Accusantium eos officia accusantium in enim ea veniam dolor aut.
              Aut et et veniam voluptatibus porro. Cum ea consequatur et rem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
