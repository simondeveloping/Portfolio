"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle(): React.ReactNode {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleTheme() {
    if (theme && theme === "light") {
      setTheme("dark");
    }
    if (theme && theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
      <Moon className="absolute !h-[1.6rem] !w-[1.6rem] rotate-0 scale-100 transition-all text-white hover:text-black active:text-black dark:rotate-0 dark:scale-0 text-violet-600" />
      <Sun className="!h-[1.6rem] !w-[1.6rem] rotate-0 scale-0 transition-all dark:-rotate-100 dark:scale-100 text-yellow-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
