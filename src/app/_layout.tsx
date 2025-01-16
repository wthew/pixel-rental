import { Slot } from "expo-router";

import * as React from 'react';
import { MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
    },
};

export default function Layout() {
    return <PaperProvider theme={theme}>
        <Slot />
    </PaperProvider>
}