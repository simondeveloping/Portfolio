"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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
    <div>
      <Switch id="Modetoggle" onClick={handleTheme}>
        {" "}
        <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 transform checked:translate-x-5 dark:bg-gray-800"></span>
      </Switch>
      <Label htmlFor="Modetoggle"></Label>
    </div>
  );
}
