import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import * as React from 'react';

export default function Layout() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ drawerType: 'front' }} />
    </GestureHandlerRootView>
}
