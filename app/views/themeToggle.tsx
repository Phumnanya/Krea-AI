"use client";

import { useTheme } from "../components/themecontext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
     const { theme, toggleTheme } = useTheme();

  return(
    <button type="button" onClick={toggleTheme}
     className="w-fit p-1 bg-gray-200 rounded-full text-black">
        {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  )
}