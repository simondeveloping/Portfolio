import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Link href="/">
        <ArrowBigLeft size={70} className="absolute text-blue-400 top-1/2 " />
      </Link>
      {children}
    </div>
  );
}
