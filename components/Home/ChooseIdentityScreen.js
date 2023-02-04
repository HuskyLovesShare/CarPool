import React from "react";
import { View } from "react-native";

import { Box, Button } from "native-base";

export default function ChooseIdentityScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Box width={"200"} minWidth={"150"}>
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
        <View style={{ height: 30 }} />
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
