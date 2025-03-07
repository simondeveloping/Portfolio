"use client";
import Music from "./music";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { auth, set } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      setSuccess("true");
    } catch (error) {
      setError("Invalid credentials or user does not exist");
    }
  };
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/login.gif)" }}
    >
      <Music />

      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <div className="border-2 border-blay bg-transparent backdrop-blur-md w-[50vw] h-[60vh] rounded-xl flex justify-center p-4 flex-col items-center gap-4">
          {error && <p className="text-blay font-bold">{error}</p>}
          {success && (
            <div className="bg-green-500 text-white p-3 rounded">Success!</div>
          )}
          <h1 className="text-3xl font-bold text-blay">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <input
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-1 rounded-xl border-2 border-blay bg-transparent placeholder-black text-black focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            />
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 rounded-xl border-2 border-blay bg-transparent placeholder-black text-black focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-400 text-white p-2 rounded-xl">
              Login
            </button>
          </form>
        </div>
        <div className="w-[50vw] flex justify-start">
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
