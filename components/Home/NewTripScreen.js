import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function NewTripScreen({ navigation, route }) {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(null);
  const [price, setPrice] = useState(0);
  const [parkingPrice, setParkingPrice] = useState(0);

  const [date, setDate] = useState(new Date());

  const styles = StyleSheet.create({
    input: {
      height: 30,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 200,
    },
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"New Trip"}</Text>
      <Text>{route.params.isToNEU ? "is to NEU" : "is Leave NEU"}</Text>
      <Text>
        {route.params.isDriver ? "is Driver: true" : "is Driver: false"}
      </Text>

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>{"Address "}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder=""
        />
      </View>

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
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
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>{"Number of People "}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="0"
          keyboardType="numeric"
        />
      </View>

      <Text>{"Distance: 10 miles"}</Text>
      <Text>{"Recommanded Price: $20"}</Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>{"Ride Fee "}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          placeholder="Free"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>{"Parking Fee"}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setParkingPrice}
          value={parkingPrice}
          placeholder="Free"
          keyboardType="numeric"
        />
      </View>
      <Text>{`Total Price: ${Number(price) + Number(parkingPrice)}`}</Text>
      <Button title={"Submit"} onPress={() => navigation.popToTop()} />
    </View>
  );
}
