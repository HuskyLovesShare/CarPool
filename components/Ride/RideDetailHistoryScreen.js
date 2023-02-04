import React from "react";
import { View } from "react-native";
import Map from "../Map";

import { Text, Box, Stack, Heading } from "native-base";

export default function RideDetailHistoryScreen({ navigation, route }) {
  const rideInfo = route.params.rideInfo;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Map />
      <Box backgroundColor={"white"} width={"100%"}>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {`${rideInfo.date} · ${rideInfo.time}`}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {`From: ${rideInfo.location}`}
            </Text>
          </Stack>
          <Text
            fontWeight="400"
            fontSize={"md"}
          >{`Distance: ${rideInfo.distance} miles`}</Text>
          <Text
            fontWeight="400"
            fontSize={"md"}
          >{`Fee: $${rideInfo.fee}`}</Text>
        </Stack>
      </Box>
    </View>
  );
}
