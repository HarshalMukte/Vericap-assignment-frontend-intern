"use client";

import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply the dark mode class based on local storage
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("darkMode")) || false;
    setDarkMode(storedTheme);

    if (storedTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
