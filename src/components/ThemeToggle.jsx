import React from 'react'
import {useTheme} from "../context/ThemeContext"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className='toggle' onClick={toggleTheme}>
      <div className={`slider ${dark ? "active" : ""}`}>
        {dark ? <FaMoon/> : <FaSun/>}
      </div>
    </div>
  );
}

export default ThemeToggle