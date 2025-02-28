"use client";
import { useEffect, useState } from "react";

export default function Overlay() {
  const [animate, setAnimate] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Verzögere den Start der Animation, damit der initiale Zustand gerendert wird.
    const animateTimer = setTimeout(() => {
      setAnimate(true);
    }, 50); // 50ms Verzögerung, anpassbar

    // Entferne das Overlay, sobald die Animation abgeschlossen ist.
    const removeTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 1050); // 50ms + 1000ms = 1050ms

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
        <div className="h-screen w-[50vw] dark:bg-[#004f79] bg-[#eabfff] absolute right-0"></div>
        <div className="h-screen w-[70vw] dark:bg-[#0070ad] bg-[#d580ff] absolute right-30"></div>
      </div>
    </div>
  );
}
