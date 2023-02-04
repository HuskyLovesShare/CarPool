import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import RideScreen from "./RideScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ride"
        component={RideScreen}
        options={{
          tabBarLabel: "Ride",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
