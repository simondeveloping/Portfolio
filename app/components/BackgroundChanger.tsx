"use client";

import { useEffect, useState } from "react";

export default function BackgroundChanger() {
  const [bgClass, setBgClass] = useState("bg-cream");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / scrollHeight) * 100; // Prozentwert der Scroll-Position

      if (scrollPercent < 10) {
        setBgClass("bg-cream");
      } else if (scrollPercent >= 10 && scrollPercent < 40) {
        setBgClass("bg-cookie");
      } else if (scrollPercent >= 40 && scrollPercent < 70) {
        setBgClass("bg-cream");
      } else {
        setBgClass("bg-blay");
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
