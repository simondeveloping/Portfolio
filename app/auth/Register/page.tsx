"use client";
import { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      router.push("/auth/Login");
    } catch (error) {
      setError((error as Error).message || "An error occurred");
      throw error;
    }
  }

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/login.gif)" }}
    >
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <div className="border-2 border-blay bg-transparent backdrop-blur-md w-[60vw] h-[70vh] rounded-xl flex justify-center p-4">
          <h1 className="text-3xl font-bold text-blay">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-4xl">{error}</p>}
            <button
              className="bg-blue-400 text-white p-2 rounded-xl"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-[60vw] flex justify-start">
          {" "}
          <div className=" w-auto border-2 border-blay bg-transparent backdrop-blur-md p-3 rounded-xl flex flex-row text-blay gap-4">
            <h1>Already have an account?</h1>
            <h1>
              <Link href="/auth/Login">
                <u className="text-emerald-700 font-bold">Login here</u>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
