"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";
const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const themeMode = theme === "system" ? systemTheme : theme;
  console.log(themeMode);

  return (
    <div className="cursor-pointer">
      {mounted && themeMode === "light" ? (
        <CiDark onClick={() => setTheme("dark")} size={25} />
      ) : (
        <CiLight color="yellow" onClick={() => setTheme("light")} size={25} />
      )}
    </div>
  );
};

export default ThemeComp;
