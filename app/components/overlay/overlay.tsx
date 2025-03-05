"use client";
import { useEffect, useState } from "react";

interface OverlayProps {
  color1: string;
  color2: string;
}
export default function Overlay({ color1, color2 }: OverlayProps) {
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
          animate ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className={`h-screen w-[50vw] ${color1} absolute right-0`}></div>
        <div className={`h-screen w-[70vw] ${color2} absolute right-30`}></div>
      </div>
    </div>
  );
}
