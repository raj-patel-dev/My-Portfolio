"use client";

import React, { useEffect, useState } from "react";
import { Row, ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  useEffect(() => {
    if (mounted) {
      setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
    }
  }, [theme, mounted]);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      suppressHydrationWarning
      prefixIcon={mounted ? icon : "dark"}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
