"use client";

export default function InfiniteScroll() {
  const images = [
    "/firebase.svg",
    "/nextjs.svg",
    "/react.svg",
    "/tailwind.svg",
    "/typescript.svg",
    "/vercel2.svg",
    "/html.svg",
    "/github.svg",
  ];

  return (
    <div className="w-full flex overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {/* 2x die gleiche Bildreihe für nahtlosen Übergang */}
        {[...Array(2)].map((_, i) => (
          <ul key={i} className="flex [&_li]:mx-4 [&_img]:max-w-none">
            {images.map((src, index) => (
              <li key={`${i}-${index}`}>
                <img
                  src={src}
                  alt={`Bild ${index + 1}`}
                  className="h-[20vh] w-[20vh] "
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
