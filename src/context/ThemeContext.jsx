import {createContext, useContext, useState, useEffect} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") return true;
        if (savedTheme === "light") return false;

        return false;
    });

    const toggleTheme = () => setDark(!dark);

    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <ThemeContext.Provider value={{dark, toggleTheme}}>
            <div className={dark ? "light" : "dark"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);