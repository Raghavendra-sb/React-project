import {createContext,useContext} from "react";


export const ThemeContext = createContext({//createContext() creates a central control panel for the theme settings.
    themeMode:"light",
    darkTheme:() => {},
    lightTheme:() => {},
})

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}
// themeMode: Stores the current theme (light or dark).

// darkTheme: A placeholder function to switch to dark mode.

// lightTheme: A placeholder function to switch to light mode.

// ThemeProvider is exported so it can wrap the app and provide theme values.

// useTheme() is a custom hook that makes it easy for any component to access ThemeContext.
