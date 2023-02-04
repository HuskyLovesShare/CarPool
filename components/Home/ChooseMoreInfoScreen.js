import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Box, FormControl, Input, WarningOutlineIcon, NativeBaseProvider, Center, Button } from "native-base";

export default function ChooseMoreInfoScreen({ navigation, route }) {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(null);
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

  return (
    <ScrollView
      contentContainerStyle={{ marginTop: 50, marginHorizontal: 30 }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}
      >
        <Address />
        {/*<Text>{"Address "}</Text>*/}
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  onChangeText={setAddress}*/}
        {/*  value={address}*/}
        {/*  placeholder=""*/}
        {/*/>*/}
      </View>

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}
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
        <NumOfPeople/>
      </View>
      <Button
          size="lg"
          variant="outline"
          onPress={() =>
              navigation.navigate("Trips", {
                isDriver: route.params.isDriver,
                isToNEU: route.params.isToNEU,
              })
          }
      >
        Continue
      </Button>
      {/*<Button*/}
      {/*  title="Continue"*/}
      {/*  onPress={() =>*/}
      {/*    navigation.navigate("Trips", {*/}
      {/*      isDriver: route.params.isDriver,*/}
      {/*      isToNEU: route.params.isToNEU,*/}
      {/*    })*/}
      {/*  }*/}
      {/*/>*/}
    </ScrollView>
  );
}
