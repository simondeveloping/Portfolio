"use client";
import { Contact, Copyright } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathName = usePathname();
  let bgColor = "dark:bg-blay bg-white";
  let textColor = "dark:text-white text-blay";
  if (pathName === "/") {
    bgColor = "bg-cookie";
    textColor = "text-cream";
  }
  return (
    <footer className={`${bgColor} ${textColor} flex justify-center mt-40`}>
      <div className="h-auto flex flex-col justify-around w-full ">
        <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/4 flex flex-col h-full justify-start items-start gap-1 pt-20 pl-10">
            <h1 className="text-2xl">
              <span className="animate-blink text-red-400">[ </span>simonp.one
              <span className="text-blue-400 animate-blink"> ]</span>
            </h1>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col h-full justify-start gap-1 p-10">
            <h1 className="text-2xl pb-5 font-semibold">This Site</h1>
            <Link href="/" className="text-xl hover:text-red-400 opacity-50">
              Back to Top
            </Link>
            <Link href="/" className="text-xl hover:text-red-400 opacity-50">
              About Me
            </Link>
            <Link href="/" className="text-xl hover:text-red-400 opacity-50">
              Projects
            </Link>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col h-full justify-start  gap-1 p-10">
            <h1 className="text-2xl pb-5 font-semibold">Contact</h1>
            <Link
              href="mailto:simon.pham@web.de"
              className="text-xl hover:text-red-400 opacity-50"
            >
              Mail Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/simon-pham-96a8a82ab/"
              className="text-xl hover:text-red-400 opacity-50"
            >
              LinkedIn
            </Link>{" "}
          </div>
          <div className="w-full lg:w-1/4 flex flex-col h-full justify-start  gap-1 p-10">
            <h1 className="text-2xl pb-5 font-semibold">Links</h1>
            <Link
              href="https://simontesting.pages.dev"
              className="text-xl hover:text-red-400 opacity-50"
            >
              My first website :)
            </Link>
            <Link
              href="https://instagram.com/simonp_25"
              className="text-xl hover:text-red-400 opacity-50"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="pl-10 pb-10 mb-10">
          <h1 className="flex flex-row">
            2025 &nbsp;<Copyright></Copyright>&nbsp; Simon - All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
}
