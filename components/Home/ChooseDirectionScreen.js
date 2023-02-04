import React from "react";
import { View } from "react-native";
import { Box, Button } from "native-base";

export default function ChooseDirectionScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Box width={"200"} minWidth={"150"}>
        <Button
          size="lg"
          variant="outline"
          onPress={() => {
            if (route.params.isDriver) {
              navigation.navigate("New Trip", {
                isDriver: true,
                isToNEU: true,
              });
            } else {
              navigation.navigate("More Information", {
                isDriver: false,
                isToNEU: true,
              });
            }
          }}
        >
          To NEU
        </Button>
        <View style={{ height: 30 }} />
        <Button
          size="lg"
          variant="outline"
          onPress={() => {
            if (route.params.isDriver) {
              navigation.navigate("New Trip", {
                isDriver: true,
                isToNEU: false,
              });
            } else {
              navigation.navigate("More Information", {
                isDriver: false,
                isToNEU: false,
              });
            }
          }}
        >
          Leave NEU
        </Button>
      </Box>
    </View>
  );
}
