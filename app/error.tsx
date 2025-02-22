"use client";
export default function Error() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl">Error - Oops</h1>
        <h1 className="text-4xl">Maybe you should take a break?</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-coffee"
        >
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
          <path d="M6 2v2" />
        </svg>
      </div>
    </div>
  );
}
