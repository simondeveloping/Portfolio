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
  Menu,
  Home,
  User,
  TerminalSquare,
  MessageCircleMore,
  FolderGit,
  Link2,
  Star,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  // const [textColor, setTextColor] = useState("text-white");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);

  /*
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
*/
  /* 
useEffect(() => {
    handleScroll(); // Überprüfe die Schriftfarbe sofort nach dem Laden
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  */
  return (
    <nav className="">
      {/*To make nav sticky add  {`sticky top-0 ${textColor} z-50 bg-transparent`}*/}
      <div className="dark:dark:bg-[#1b1b1b] bg-white text-black dark:text-white lg:flex lg:justify-center ">
        <div className="text-center p-9 flex flex-row lg:justify-around justify-between xl:text-lg lg:text-base sm:text-sm md:text-sm lg:w-[100vw]">
          <div className="flex flex-row justify-center lg:w-[30vw]">
            <div className="flex lg:hidden">
              <Sheet open={linksOpen} onOpenChange={setLinksOpen}>
                <SheetTrigger>
                  <Star />
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="text-black dark:text-white"
                >
                  <SheetHeader>
                    <SheetTitle>Important</SheetTitle>
                    <SheetDescription></SheetDescription>
                    <div className="flex flex-col gap-5">
                      <Link
                        href="/Portfolio"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setLinksOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="h-[1.6rem] w-[1.6rem] p-1"
                        />
                        <h1 className="text-2xl">Github</h1>
                      </Link>
                      <Link
                        href="/MiniProjects"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setLinksOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="h-[1.6rem] w-[1.6rem] text-blue-400 p-1"
                        />
                        <h1 className="text-2xl">LinkedIn</h1>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setLinksOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="h-[1.6rem] w-[1.6rem] text-blue-400 p-1"
                        />
                        <h1 className="text-2xl">Mail</h1>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setLinksOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="h-[1.6rem] w-[1.6rem] text-red-400 p-1"
                        />
                        <h1 className="text-2xl">Instagram</h1>
                      </Link>
                    </div>
                    <div className="relative left-0 top-10 flex items-center gap-5">
                      <ModeToggle />
                      <h1>Light / Dark mode</h1>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="gap-4 flex-row items-start lg:flex hidden">
              <ModeToggle />
              <Link href="/">
                <FontAwesomeIcon
                  icon={faFile}
                  className="h-[1.6rem] w-[1.6rem] text-orange-400 p-1"
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-[1.6rem] w-[1.6rem] p-1"
                />
              </Link>
              <Link href="/" className="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-[1.6rem] w-[1.6rem] text-blue-400 p-1"
                />
              </Link>
              <Link href="/" className="">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-[1.6rem] w-[1.6rem] text-blue-400 p-1"
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[1.6rem] w-[1.6rem] text-red-400 p-1"
                />
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="flex flex-col gap-5 lg:hidden">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent className="text-black dark:text-white">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription></SheetDescription>
                    <div className="flex flex-col gap-5 ">
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
                        href="/Projects"
                        className="flex flex-row gap-3 items-center"
                        onClick={() => setSheetOpen(false)}
                      >
                        <FolderGit />
                        <h1 className="text-2xl">Projects</h1>
                      </Link>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="justify-around space-x-4 items-center lg:gap-8 hidden sm:flex font-medium">
              <Link
                href="/"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                About
              </Link>
              <Link
                href="/MiniProjects"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                Mini-Projects
              </Link>
              <Link
                href="/Projects"
                className="gap-2 flex relative transition-colors duration 500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-teal-400 after:bottom-[-5px] after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
