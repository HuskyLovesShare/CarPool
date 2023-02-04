import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NativeBaseProvider } from "native-base";

import Tabs from "./components/Tabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
