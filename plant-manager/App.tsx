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
import { ActivityIndicator, View } from "react-native";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [loaded] = useFonts({
    Regular: Jost_400Regular,
    Medium: Jost_500Medium,
    Semi_Bold: Jost_600SemiBold,
    Bold: Jost_700Bold,
    Light: Jost_300Light,
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={colors}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
