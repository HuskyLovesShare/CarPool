import React, { useState } from "react";

import { View } from "react-native";

import {
  Text,
  Pressable,
  Box,
  HStack,
  Spacer,
  Flex,
  Badge,
  Button,
} from "native-base";

export default function RideCard(props) {
  const rideInfo = props.rideInfo;
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <Box alignItems="center" marginBottom={5}>
      <Pressable width={"100%"} onPress={props.onPressed}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? "coolGray.200"
                  : isHovered
                  ? "coolGray.200"
                  : "coolGray.100"
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
            >
              {props.type == "rideHistory" ? null : (
                <HStack alignItems="center">
                  {rideInfo.fee == 0 ? (
                    <Badge
                      colorScheme="green"
                      _text={{
                        color: "white",
                      }}
                      variant="solid"
                      rounded="4"
                    >
                      Free
                    </Badge>
                  ) : null}

                  {rideInfo.verifiedDriver ? (
                    <>
                      {rideInfo.fee == 0 ? <View style={{ width: 5 }} /> : null}
                      <Badge
                        colorScheme="lightBlue"
                        _text={{
                          color: "white",
                        }}
                        variant="solid"
                        rounded="4"
                      >
                        Verified
                      </Badge>
                    </>
                  ) : null}

                  <Spacer />
                  <Text fontSize={10} color="coolGray.800">
                    {`${rideInfo.distance} miles`}
                  </Text>
                </HStack>
              )}

              <Text
                color="coolGray.800"
                mt="1"
                fontWeight="medium"
                fontSize="lg"
              >
                {`${rideInfo.date} · ${rideInfo.time}`}
              </Text>

              <Text mt="0" fontSize="sm" color="coolGray.700">
                {`Location: ${rideInfo.location}`}
              </Text>

              <Text mt="0" fontSize="sm" color="coolGray.700">
                {`Fee: $${rideInfo.fee}`}
              </Text>

              <Text mt="0" fontSize="sm" color="coolGray.700">
                {`Driver: ${rideInfo.driver}`}
              </Text>

              {props.type == "rideHistory" ? null : (
                <>
                  <Text mt="0" fontSize="sm" color="coolGray.700">
                    {`Available: ${rideInfo.available}/${rideInfo.totalPositions}`}
                  </Text>

                  <Flex>
                    {isFocused ? (
                      <Button
                        mt="2"
                        fontSize={12}
                        fontWeight="medium"
                        textDecorationLine="underline"
                        color="darkBlue.600"
                        colorScheme={hasJoined ? "rose" : "lightBlue"}
                        alignSelf="flex-start"
                        onPress={() => {
                          setHasJoined(!hasJoined);
                        }}
                      >
                        {hasJoined ? "Cancel" : "Join"}
                      </Button>
                    ) : (
                      <Button
                        mt="2"
                        fontSize={12}
                        fontWeight="medium"
                        color="darkBlue.600"
                        colorScheme={hasJoined ? "rose" : "lightBlue"}
                        onPress={() => {
                          setHasJoined(!hasJoined);
                        }}
                      >
                        {hasJoined ? "Cancel" : "Join"}
                      </Button>
                    )}
                  </Flex>
                </>
              )}
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
}
