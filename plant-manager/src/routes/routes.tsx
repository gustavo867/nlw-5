import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "styled-components";

import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/UserIdentification/Confirmation";
import PlantSelect from "../screens/PlantSelect";

const Stack = createStackNavigator();

function Routes() {
  const { green: themeGreen } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PlantSelect" component={PlantSelect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };
