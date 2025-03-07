import { Contact, Copyright } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-blay pt-20 ">
      <hr className="dark:border-white opacity-90 border-blay" />
      <div className="lg:flex hidden justify-around items-center p-8 dark:bg-blay bg-white">
        <Link href="https://simontesting.pages.dev">
          {" "}
          <h1 className="lg:text-lg text-black dark:text-white">
            <u>Old page</u>
          </h1>
        </Link>
        <h1 className="lg:text-lg text-black dark:text-white flex flex-row gap-2">
          2025 <Copyright></Copyright> Simon - All Rights Reserved
        </h1>
        <Link href="mailto:simon.pham@web.de">
          <h1 className="lg:text-lg text-black dark:text-white flex flex-row gap-2">
            <u>Contact me</u>
            <Contact></Contact>
          </h1>
        </Link>
      </div>
      <div className="lg:hidden flex text-blay dark:text-white items-center flex-col">
        <div className="flex flex-row w-full justify-center">
          <h1 className="text-base flex flex-row gap-2 items-center justify-center p-4">
            2025 <Copyright></Copyright> Simon - All Rights Reserved
          </h1>
        </div>
        <div className="w-full flex justify-between p-2">
          <div className="w-1/2 flex justify-center">
            <Link href="https://simontesting.pages.dev">
              {" "}
              <h1 className="">
                <u>Old page</u>
              </h1>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center">
            <Link href="https://simonp.one">
              {" "}
              <h1 className="flex flex-row gap-2">
                <u>Contact me</u>
                <Contact></Contact>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
