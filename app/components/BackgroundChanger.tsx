"use client";

import { useEffect, useState } from "react";

export default function BackgroundChanger() {
  const [bgClass, setBgClass] = useState("bg-cream");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Bildschirmgröße für Handys, z.B. 768px
      setIsTablet(window.innerWidth <= 1200 && window.innerWidth > 768); // Bildschirmgröße für Tablets, z.B. 1024px
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (isMobile) {
        // Anpassung für Handys
        if (scrollY > 100 && scrollY < 500) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 500 && scrollY < 3000) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 3000 && scrollY < 5000) {
          setBgClass("bg-cream");
        } else if (scrollY >= 5000) {
          setBgClass("bg-blay");
        } else {
          setBgClass("bg-cream");
        }
      } else if (isTablet) {
        if (scrollY > 200 && scrollY < 600) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 600 && scrollY < 3000) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 3000 && scrollY < 5000) {
          setBgClass("bg-cream");
        } else if (scrollY >= 5000) {
          setBgClass("bg-blay");
        } else {
          setBgClass("bg-cream");
        }
      } else {
        // Anpassung für Desktop
        if (scrollY > 300 && scrollY < 700) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 700 && scrollY < 1500) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 1500 && scrollY < 2000) {
          setBgClass("bg-cookie");
        } else if (scrollY >= 2000 && scrollY < 3700) {
          setBgClass("bg-cream");
        } else if (scrollY >= 3700) {
          setBgClass("bg-blay");
        } else {
          setBgClass("bg-cream");
        }
      }
    };
    console.log(isTablet);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initiale Überprüfung der Bildschirmgröße
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isTablet]);

  return (
    <div
      className={`fixed inset-0 -z-10 transition-colors duration-500 ${bgClass}`}
    />
  );
}
