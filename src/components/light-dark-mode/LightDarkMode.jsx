import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./LightDarkMode.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <h1>Theme Switcher</h1>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
};

export default LightDarkMode;
