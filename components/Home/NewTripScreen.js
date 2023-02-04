import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  ScrollView, TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DriverMap from "../DriverMap";
import {Box, FormControl, Input} from "native-base";

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

  const Address = () => {
    return <Box alignItems="center">
      <FormControl isInvalid w="100%" minW="300px">
        <FormControl.Label>Address</FormControl.Label>
        <Input placeholder="Enter address" />
      </FormControl>
    </Box>;
  };

  const NumOfPeople = () => {
    return <Box alignItems="center">
      <FormControl isInvalid w="100%" minW="300px">
        <FormControl.Label>Number of People</FormControl.Label>
        <Input placeholder="0" />
      </FormControl>
    </Box>;
  };

  const RideFee = () => {
    return <Box alignItems="center">
      <FormControl isInvalid w="100%" minW="300px">
        <FormControl.Label>Ride Fee</FormControl.Label>
        <Input placeholder="0" />
      </FormControl>
    </Box>;
  };

  const ParkingFee = () => {
    return <Box alignItems="center">
      <FormControl isInvalid w="100%" minW="300px">
        <FormControl.Label>Parking Fee</FormControl.Label>
        <Input placeholder="0" />
      </FormControl>
    </Box>;
  };

  return (
    <ScrollView
      contentContainerStyle={{ marginTop: 50, marginHorizontal: 30 }}
      keyboardShouldPersistTaps="handled"
    >
      {/*<Text>{"New Trip"}</Text>*/}
      {/*<Text>{route.params.isToNEU ? "is to NEU" : "is Leave NEU"}</Text>*/}
      {/*<Text>*/}
      {/*  {route.params.isDriver ? "is Driver: true" : "is Driver: false"}*/}
      {/*</Text>*/}

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}
      >
        {/*<Address />*/}
        {/*<Text>{"Address "}</Text>*/}
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  onChangeText={setAddress}*/}
        {/*  value={address}*/}
        {/*  placeholder=""*/}
        {/*/>*/}
      </View>

      <View
        style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20}}
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
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}
      >
        <NumOfPeople />
        {/*<Text>{"Number of People "}</Text>*/}
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  onChangeText={setNumber}*/}
        {/*  value={number}*/}
        {/*  placeholder="0"*/}
        {/*  keyboardType="numeric"*/}
        {/*/>*/}
      </View>

      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}>
        <DriverMap />
      </View>

      <View
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20}}
      >
        <Text>{"Distance: 10 miles"}</Text>
        <Text>{"Recommended Price: $20"}</Text>
      </View>

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}
      >

        <RideFee />
        {/*<Text>{"Ride Fee "}</Text>*/}
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  onChangeText={setPrice}*/}
        {/*  value={price}*/}
        {/*  placeholder="Free"*/}
        {/*  keyboardType="numeric"*/}
        {/*/>*/}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        {/*<Text>{"Parking Fee"}</Text>*/}
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  onChangeText={setParkingPrice}*/}
        {/*  value={parkingPrice}*/}
        {/*  placeholder="Free"*/}
        {/*  keyboardType="numeric"*/}
        {/*/>*/}
        <ParkingFee />
      </View>
      <Text>{`Total Price: ${Number(price) + Number(parkingPrice)}`}</Text>
      <Button title={"Submit"} onPress={() => navigation.popToTop()} style={{paddingBottom: 100}} />
    </ScrollView>
  );
}
