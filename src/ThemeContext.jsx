import React, { useContext , useState} from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme()
{
    return useContext(ThemeContext);
}
export function useThemeUpdate()
{
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider ( {childern}) {
    const[darkTheme, setDarkTheme] = useState(true);


    function toggleTheme() {
        setDarkTheme(prevDarkThem =>  ! prevDarkThem)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {childern}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
} 