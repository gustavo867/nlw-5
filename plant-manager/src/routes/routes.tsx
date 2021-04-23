import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "styled-components";
import { useStorage } from "../hooks/useStorage";

import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/UserIdentification/Confirmation";
import Loading from "../components/Loading";
import AuthRoutes from "./TabRoutes";
import PlantSave from "../screens/PlantSave";

const Stack = createStackNavigator();

function Routes() {
  const { green: themeGreen } = useContext(ThemeContext);
  const { data, isLoading, hasStorage } = useStorage("@plantmanager:user");

  if (isLoading.current === true) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {hasStorage ? (
          <Stack.Screen name="PlantSelect" component={AuthRoutes} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen
              name="UserIdentification"
              component={UserIdentification}
            />
            <Stack.Screen name="Confirmation" component={Confirmation} />
          </>
        )}
        <Stack.Screen name="PlantSave" component={PlantSave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };
