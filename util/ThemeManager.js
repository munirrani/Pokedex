import React, { useState, useEffect } from 'react'
import { Appearance } from 'react-native'
import { darkTheme, lightTheme } from '../Styles'

export const ThemeContext = React.createContext()

export const ThemeProvider = ( {children} ) => {
    
    const [themeOption, setThemeOption] = useState('system')
    const [theme, setTheme] = useState(Appearance.getColorScheme())
    const isDark = theme === 'dark'
    const themeStyle = isDark ? darkTheme : lightTheme
    
    const selectTheme = (theme) => {
        setThemeOption(theme)
        theme === 'system' ? setTheme(Appearance.getColorScheme()) : setTheme(theme)
    }
    
    const onThemeChange = ({ colorScheme }) => setTheme(colorScheme)
    
    useEffect(() => {
        Appearance.addChangeListener(onThemeChange)
        
        return () => Appearance.removeChangeListener(onThemeChange)
    }, [])
    
    return(
        <ThemeContext.Provider value={{ selectTheme, isDark, themeOption, themeStyle }}>
            { children }
        </ThemeContext.Provider>
    )
}