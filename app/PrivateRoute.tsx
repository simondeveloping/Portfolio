"use client";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/unauthorized");
    }
  }, [user, loading, router]);

  if (loading) return;
  <div className="h-screen w-full justify-center items-center">
    <p className="text-3xl text-red-400">Lädt...</p>
  </div>;
  if (!user) return null;

  return <>{children}</>;
};

export default PrivateRoute;
