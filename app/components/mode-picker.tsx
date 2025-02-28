"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

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
    <button
      className="relative transition-transform  flex justify-center p-1 bg-blay dark:bg-white rounded-full "
      onClick={handleTheme}
    >
      <Moon
        className="dark:scale-100 relative scale-0 transition-transform duration-1000 text-blay"
        size={24}
      />
      <Sun
        className="dark:scale-0 absolute transition-transform duration-1000 text-white"
        size={24}
      />
    </button>
  );
}
