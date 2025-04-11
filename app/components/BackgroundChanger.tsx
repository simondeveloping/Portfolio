"use client";

import { useEffect, useState } from "react";

export default function BackgroundChanger() {
  const [bgClass, setBgClass] = useState("bg-cream");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / scrollHeight) * 100; // Prozentwert der Scroll-Position

      if (scrollPercent < 5) {
        setBgClass("bg-cream");
      } else if (scrollPercent >= 3 && scrollPercent < 5) {
        setBgClass("bg-[#615858]");
      } else if (scrollPercent >= 5 && scrollPercent < 7) {
        setBgClass("bg-[#403a3a]");
      } else if (scrollPercent >= 7 && scrollPercent < 25) {
        setBgClass("bg-cookie");
      } else if (scrollPercent >= 25 && scrollPercent < 27) {
        setBgClass("bg-[#82827f]");
      } else if (scrollPercent >= 27 && scrollPercent < 30) {
        setBgClass("bg-[#a1a19f]");
      } else if (scrollPercent >= 30 && scrollPercent < 46) {
        setBgClass("bg-cream");
      } else if (scrollPercent >= 46 && scrollPercent < 70) {
        setBgClass("bg-cream");
      } else {
        setBgClass("bg-cream");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-0 -z-10 transition-colors duration-500 ${bgClass}`}
    />
  );
}
