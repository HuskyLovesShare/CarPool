import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    // backgroundColor: "#5F644FF",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    // color: "white",
  },
});

export default function MyButton(props) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}
