"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import { use, useEffect } from "react";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/unauthorized");
    }
  }, [user, router]);
  if (user === null) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
