import Link from "next/link";
export default function Unauthorized() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl text-red-400">
        Unauthorized<span className="font-bold m-4">401</span>
      </h1>
      <div className="flex flex-row gap-4">
        <h1>Maybe you have to log in first </h1>
        <Link href="/auth/Login" className="text-blue-300 font-bold">
          {" "}
          <u>Log in here</u>
        </Link>
      </div>
    </div>
  );
}
