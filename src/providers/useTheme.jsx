import { createContext, useEffect, useState } from "react"
import "../index.css"

const Themecontext = createContext({state: false, action: () => {}})

function ThemeProvider( {children} ) {
    const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        if (isDark) {
            document.querySelector('body').setAttribute('data-theme', 'light')
        } else {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
    },[isDark])

    const toggle = () => {
        setIsDark(() => !isDark);
    }

    const value = {
        state: isDark,
        action: toggle
    }
  return (
    <Themecontext.Provider value={value} >
        {children}
    </Themecontext.Provider>
  )
}
export {Themecontext, ThemeProvider};