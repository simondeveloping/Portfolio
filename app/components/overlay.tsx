// components/Overlay.tsx
"use client";
import { useEffect, useState } from "react";

export default function Overlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Nach 3 Sekunden ausblenden

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Verhindert Rendering, wenn nicht sichtbar

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-50 transition-opacity duration-1000">
      <div className="flex gap-3">
        <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-0"></div>
        <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-100"></div>
        <div className="w-8 h-8 bg-white opacity-0 animate-snake delay-200"></div>
        <div className="w-8 h-8 bg-blue-200 opacity-0 animate-snake delay-300"></div>
      </div>
    </div>
  );
}
