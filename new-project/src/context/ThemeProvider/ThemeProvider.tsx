import { ReactNode, FC, useState,createContext } from "react"


interface ThemeProviderProps {
    children: ReactNode
}

interface ThemeContextType {
    theme: string
    setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider:FC<ThemeProviderProps> = (props) => {
    const {children} = props

    const [theme, setTheme] = useState('light')



    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
export {ThemeProvider, ThemeContext }