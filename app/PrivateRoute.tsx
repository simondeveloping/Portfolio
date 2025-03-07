"use client";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Lädt...</p>;
  if (!user) return null; // Verhindert das Rendern, bevor umgeleitet wird

  return <>{children}</>;
};

export default PrivateRoute;
