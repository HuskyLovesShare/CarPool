import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Tabs from "./components/Tabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <View style={{ height: 20 }} />
    </SafeAreaProvider>
  );
}
