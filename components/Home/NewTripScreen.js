import React, { useState } from "react";
import { View, Button, Text, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DriverMap from "../DriverMap";
import { Box, FormControl, Input } from "native-base";

export default function NewTripScreen({ navigation, route }) {
  const [number, setNumber] = useState(null);
  const [price, setPrice] = useState(0);
  const [parkingPrice, setParkingPrice] = useState(0);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, marginBottom: 50 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          marginTop: 30,
          marginHorizontal: 30,
          marginBottom: 50,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Box alignItems="left" width={"100%"}>
            <FormControl.Label>Number of People</FormControl.Label>
            <Input
              placeholder="0"
              onChangeText={setNumber}
              keyboardType={"numeric"}
              value={number}
            />
          </Box>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            maxHeight: "70%",
          }}
        >
          <DriverMap />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text>{"Distance: 10 miles"}</Text>
          <Text>{"Recommended Price: $20"}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Box alignItems="left" width={"100%"}>
            <FormControl.Label>Ride Fee</FormControl.Label>
            <Input
              placeholder="0"
              onChangeText={setPrice}
              keyboardType={"numeric"}
              value={price}
            />
          </Box>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Box alignItems="left" width={"100%"}>
            <FormControl.Label>Parking Fee</FormControl.Label>
            <Input
              placeholder="0"
              onChangeText={setParkingPrice}
              keyboardType={"numeric"}
              value={parkingPrice}
            />
          </Box>
        </View>
        <Text>{`Total Price: ${Number(price) + Number(parkingPrice)}`}</Text>
        <Button title={"Submit"} onPress={() => navigation.popToTop()} />
      </ScrollView>
    </View>
  );
}
