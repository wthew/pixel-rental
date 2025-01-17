import { Slot } from "expo-router";
import { withTheme } from "../styles/theme";

function Layout() {
    return <Slot />
}

export default withTheme(Layout)