import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_300Light,
} from "@expo-google-fonts/jost";
import colors from "./src/styles/colors";
import { Routes } from "./src/routes/routes";
import Loading from "./src/components/Loading";

export default function App() {
  const [loaded] = useFonts({
    Regular: Jost_400Regular,
    Medium: Jost_500Medium,
    Semi_Bold: Jost_600SemiBold,
    Bold: Jost_700Bold,
    Light: Jost_300Light,
  });

  if (!loaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={colors}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
