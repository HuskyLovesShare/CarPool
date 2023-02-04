import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NativeBaseProvider, extendTheme } from "native-base";

import Tabs from "./components/Tabs";

export default function App() {
  const theme = extendTheme({
    components: {
      Button: {
        sizes: {
          lg: {
            _text: {
              fontSize: "lg",
            },
          },
        },
      },
    },
  });

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
