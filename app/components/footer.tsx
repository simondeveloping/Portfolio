import { Contact, Copyright } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-blay pt-20 ">
      <hr className="dark:border-white opacity-90 border-blay" />

      <div className="flex justify-around items-center p-8 dark:bg-blay bg-white">
        <Link href="https://simonp.one">
          {" "}
          <h1 className="lg:text-lg text-black dark:text-white">
            <u>simonp.one</u>
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
    </footer>
  );
}
