import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import ScrollComponent from "./src/modules/components/ScrollComponent";
import Welcome from "./src/screens/Welcome";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <ScrollComponent>
        <Welcome />
      </ScrollComponent>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
