"use client";
import Music from "./music";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (email === "" || password === "") {
      setError("Please fill all the fields");
      return;
    }
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/");
    } catch (error) {
      setError((error as Error).message || "An error occurred");
      throw error;
    }
  };
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/login.gif)" }}
    >
      <Music />

      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <div className="border-2 border-blay bg-transparent backdrop-blur-md w-[60vw] h-[70vh] rounded-xl flex justify-center p-4 flex-col">
          <h1 className="text-3xl font-bold text-blay">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-blue-400 text-white p-2 rounded-xl">
              Login
            </button>
          </form>
        </div>
        <div className="w-[60vw] flex justify-start">
          {" "}
          <div className=" w-auto border-2 border-blay bg-transparent backdrop-blur-md p-3 rounded-xl flex flex-row text-blay gap-4">
            <h1>Don&apos;t have an Account?</h1>
            <h1>
              <Link href="/auth/Register">
                <u className="text-emerald-700 font-bold">Register here</u>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
