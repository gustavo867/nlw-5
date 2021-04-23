import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components";
import { ms } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import PlantSelect from "../screens/PlantSelect";
import MyPlants from "../screens/MyPlants";
import { PlantsProvider } from "../context/PlantsContext";
import { useStorage } from "../hooks/useStorage";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  const colors = useContext(ThemeContext);
  const { hasStorage, data } = useStorage("@plantmanager:plants");

  return (
    <PlantsProvider>
      <AppTab.Navigator
        tabBarOptions={{
          activeTintColor: colors.green,
          inactiveTintColor: colors.heading,
          labelPosition: "beside-icon",
          style: {
            paddingVertical: ms(10),
            height: ms(80),
          },
        }}
      >
        <AppTab.Screen
          name="PlantSelect"
          component={PlantSelect}
          options={{
            tabBarLabel: "Nova Planta",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        {hasStorage && data && (
          <AppTab.Screen
            name="MyPlants"
            component={MyPlants}
            options={{
              tabBarLabel: "Minhas Plantas",
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                  name="format-list-bulleted"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        )}
      </AppTab.Navigator>
    </PlantsProvider>
  );
};

export default AuthRoutes;
