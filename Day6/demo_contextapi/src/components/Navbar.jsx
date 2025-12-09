import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full px-6 py-4 flex justify-between items-center ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-xl font-bold">MyApp</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;