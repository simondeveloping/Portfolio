"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-picker";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Settings,
  Menu,
  Home,
  User,
  TerminalSquare,
  MessageCircleMore,
} from "lucide-react";

export default function Navbar() {
  const [textColor, setTextColor] = useState("text-white");
  const [sheetOpen, setSheetOpen] = useState(false);

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

  useEffect(() => {
    handleScroll(); // Überprüfe die Schriftfarbe sofort nach dem Laden
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`sticky top-0 ${textColor} z-50 bg-transparent`}>
      <div className="bg-transparent text-black dark:text-white">
        <div className="text-center p-4 flex flex-row justify-between xl:text-base lg:text-base sm:text-sm md:text-sm">
          <Sheet>
            <SheetTrigger>
              <Settings className="transition-transform duration-300 hover:rotate-45 w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white dark:bg-black">
              <SheetHeader>
                <SheetTitle className="text-black dark:text-white">
                  Settings
                </SheetTitle>
                <SheetDescription className="text-black dark:text-white">
                  Customize your experience
                </SheetDescription>
                <div className="">
                  <ul className="">
                    <li className="flex items-center flex-row">
                      <h1 className="text-black dark:text-white text-xl">
                        Light / Dark Mode:{" "}
                      </h1>
                      <ModeToggle />
                    </li>
                  </ul>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <h1>Login</h1>
          <div className="justify-end flex">
            <div className="flex flex-col gap-5 lg:hidden">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-white ">
                      Are you absolutely sure?
                    </SheetTitle>
                    <SheetDescription className="text-white">
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                    <div className="flex flex-col gap-5">
                      <Link
                        href="/"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setSheetOpen(false)}
                      >
                        <Home />
                        <h1 className="text-2xl">Home</h1>
                      </Link>
                      <Link
                        href="/Portfolio"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setSheetOpen(false)}
                      >
                        <User />
                        <h1 className="text-2xl">About</h1>
                      </Link>
                      <Link
                        href="/MiniProjects"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setSheetOpen(false)}
                      >
                        <TerminalSquare />
                        <h1 className="text-2xl">Mini-Projects</h1>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setSheetOpen(false)}
                      >
                        <MessageCircleMore />
                        <h1 className="text-2xl">Contact</h1>
                      </Link>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="justify-around space-x-4 items-center lg:gap-8 hidden sm:flex">
              <Link
                href="/"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <Home />
                Home
              </Link>
              <Link
                href="/Portfolio"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <User />
                About
              </Link>
              <Link
                href="/MiniProjects"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <TerminalSquare />
                Mini-Projects
              </Link>
              <Link
                href="/contact"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                <MessageCircleMore />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
