import React, { createContext, useState, useEffect } from "react";

export const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [isDark, setDark] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <DarkContext.Provider value={{ isDark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
