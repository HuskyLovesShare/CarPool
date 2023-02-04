import React from "react";
import { View } from "react-native";

import { NativeBaseProvider, Box, Button, Divider, Heading } from "native-base";

export default function ChooseIdentityScreen({ navigation, route }) {
  console.log(route.params);

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 150 }}>
      <Box>
        <Heading size="lg" fontSize={50} bold color={"lightBlue.500"}>
          I want to{"     "}
        </Heading>

        <View style={{ height: 120 }} />
        <Button
          size="lg"
          variant="outline"
          onPress={() => {
            route.params.setIsDriver();
            navigation.navigate("Direction", { isDriver: true });
          }}
        >
          Share
        </Button>
        <View style={{ height: 20 }} />
        <Button
          size="lg"
          variant="outline"
          onPress={() => {
            route.params.setIsRider();
            navigation.navigate("Direction", { isDriver: false });
          }}
        >
          Find Share
        </Button>
      </Box>
    </View>
  );
}
