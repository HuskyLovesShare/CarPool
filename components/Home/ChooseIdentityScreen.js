import React from "react";
import { View, Button } from "react-native";

export default function ChooseIdentityScreen({ navigation, route }) {
  console.log(route.params);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Share"
        onPress={() => {
          route.params.setIsDriver();
          navigation.navigate("Direction", { isDriver: true });
        }}
      />
      <Button
        title="Find Share"
        onPress={() => {
          route.params.setIsRider();
          navigation.navigate("Direction", { isDriver: false });
        }}
      />
    </View>
  );
}
