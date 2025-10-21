import {createContext,useContext} from "react";


export const ThemeContext = createContext({//createContext() creates a central control panel for the theme settings.
    themeMode:"light",//why to pass default value? Because if we don't pass any default value, it will be undefined.
    //useContext() will use this default value if no provider is found in the component tree.
    //This is useful for components that need to know the current theme without needing to be wrapped
    darkTheme:() => {},
    lightTheme:() => {},//what happens if i didnt pass any default value here? It will be undefined
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
