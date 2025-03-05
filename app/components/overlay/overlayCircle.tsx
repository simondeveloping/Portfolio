"use client";
import { useEffect, useState } from "react";

interface OverlayProps {
  color1: string;
  color2: string;
}
export default function OverlayCircle({ color1, color2 }: OverlayProps) {
  const [animate, setAnimate] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const animateTimer = setTimeout(() => {
      setAnimate(true);
    }, 50);

    const removeTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 1050);

    return () => {
      clearTimeout(animateTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-start bg-transparent z-40">
      <div
        className={`fixed inset-0 flex items-center justify-start transition-transform duration-1000 transform ${
          animate
            ? "-translate-y-[150vh]"
            : "translate-y-[-20vh] lg:translate-y-0"
        }`}
      >
        <div
          className={`w-[300vw] h-[300vw] lg:w-[90vw] lg:h-[90vw] rounded-full ${color1} absolute right-0 bottom-[-30vh]`}
        ></div>
        <div
          className={`w-[300vw] h-[300vw] lg:w-[90vw] lg:h-[90vw] rounded-full ${color2} absolute lg:right-80 right-50 bottom-[-30vh]`}
        ></div>
      </div>
    </div>
  );
}
