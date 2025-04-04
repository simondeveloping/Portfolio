"use client";
import { useEffect, useState } from "react";
export default function ScrollBarAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = 200;
      const docHeight = 100;
      const progress = scrollTop / docHeight;
      console.log(progress);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <div
        className="h-[10vh] bg-red-400"
        style={{ width: `${scrollProgress}` }}
      >
        <h1 className="font-bold text-8xl "></h1>
      </div>
    </div>
  );
}
