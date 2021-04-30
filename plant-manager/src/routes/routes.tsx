import React, { createRef } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import UserIdentification from "../screens/UserIdentification";
import Confirmation from "../screens/UserIdentification/Confirmation";
import AuthRoutes from "./TabRoutes";
import PlantSave from "../screens/PlantSave";
import VerifyUser from "../modules/components/VerifyUser";

const Stack = createStackNavigator();

const navigateRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  navigateRef.current?.navigate(name, params);
}

function Routes() {
  return (
    <NavigationContainer ref={navigateRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="VerifyUser" component={VerifyUser} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PlantSelect" component={AuthRoutes} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };
