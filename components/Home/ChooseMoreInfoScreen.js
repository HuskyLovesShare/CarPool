import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  return (
    <ScrollView
      contentContainerStyle={{ marginTop: 50, marginHorizontal: 30 }}
      keyboardShouldPersistTaps="handled"
    >
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
      <Button
        title="Continue"
        onPress={() =>
          navigation.navigate("Trips", {
            isDriver: route.params.isDriver,
            isToNEU: route.params.isToNEU,
          })
        }
      />
    </ScrollView>
  );
}
