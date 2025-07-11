"use client";

import { useEffect, useRef, useState } from "react";

export default function Fun() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [visible, setVisible] = useState(false);

  const handlePlay = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (visible && iframeRef.current) {
      iframeRef.current.src =
        "https://www.youtube.com/embed/gGwIOzc-VCQ?autoplay=1&start=24";
    }
  }, [visible]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black relative">
      <button onClick={handlePlay} className="border-white border-2 p-10 z-10">
        PRESS ME
      </button>

      {visible && (
        <div className="w-full h-full absolute z-0">
          <img
            src="./wait-love-you.gif"
            className="w-full h-full object-cover"
            alt="waiting gif"
          />

          <iframe
            ref={iframeRef}
            width="0"
            height="0"
            className="invisible"
            allow="autoplay"
            allowFullScreen
            title="YouTube Audio"
          />
        </div>
      )}
    </div>
  );
}
