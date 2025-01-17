import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { ThemeProvider, DefaultTheme as LightTheme, DarkTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import colors from "./colors";

const adapted = adaptNavigationTheme({ reactNavigationLight: LightTheme, reactNavigationDark: DarkTheme });

const themes = {
    light: merge(adapted.LightTheme, { ...MD3LightTheme, colors: colors.light }),
    dark: merge(adapted.DarkTheme, { ...MD3DarkTheme, colors: colors.dark }),
} as const


type ThemeControlsValue = { toggle: () => void; theme: (typeof themes)[keyof (typeof themes)] }
const ThemeControls = React.createContext({} as ThemeControlsValue);
const ThemeControlsProvider = (props: React.PropsWithChildren) => {
    const defaultColorScheme = useColorScheme();

    const [colorScheme, setColorScheme] = useState(defaultColorScheme || 'dark')
    const toggle = () => setColorScheme(old => old === 'dark' ? 'light' : 'dark')
    
    const theme = colorScheme ? themes[colorScheme] : themes.dark;
    
    return <ThemeControls.Provider value={{ theme, toggle }}>
        <PaperProvider theme={theme}>
            <ThemeProvider value={theme as any}>
                {props.children}
            </ThemeProvider>
        </PaperProvider>
    </ThemeControls.Provider>
}

export const useThemeControls = () => React.useContext(ThemeControls);

export function withTheme<T extends {}>(Component: React.ComponentType<T>) {
    return (props: T) => <ThemeControlsProvider>
        <Component {...props} />
    </ThemeControlsProvider>
}

