"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [textColor, setTextColor] = useState("text-white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".bg-white, .bg-gray-500");
    let isWhiteBg = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Wenn der Abschnitt gerade sichtbar ist
      if (rect.top <= 0 && rect.bottom >= 0) {
        if (section.classList.contains("bg-white")) {
          isWhiteBg = true;
        }
      }
    });

    setTextColor(isWhiteBg ? "text-black" : "text-white");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    handleScroll(); // Überprüfe die Schriftfarbe sofort nach dem Laden
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`sticky top-0 ${textColor} z-50`}>
      <div className="bg-transparent">
        <div className="text-center p-4 flex flex-row justify-between xl:text-base lg:text-base sm:text-sm md:text-sm">
          <h1>Login</h1>
          <div className="justify-end flex">
            <div className="flex flex-col gap-5">
              <button
                className="sm:block md:hidden lg:hidden xl:hidden flex justify-end"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } gap-5 flex flex-col`}
              >
                <Link
                  href="/"
                  className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>
                <Link
                  href="/Portfolio"
                  className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  About
                </Link>
                <Link
                  href="/ThisPage"
                  className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  Contact
                </Link>
              </div>
            </div>
            <div className="justify-around space-x-4 items-center lg:gap-8 hidden sm:flex">
              <Link
                href="/"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </Link>
              <Link
                href="/Portfolio"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                About
              </Link>
              <Link
                href="/ThisPage"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Projects
              </Link>
              <Link
                href="/contact"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
