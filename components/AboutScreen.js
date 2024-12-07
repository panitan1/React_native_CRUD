import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={Stymain1.St1}>
      <Text style={Stymain1.St2}>Panitan Thainlek</Text>

    </View>
  );
}

const Stymain1 = StyleSheet.create({
  St1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCCFF",
  },
  St2: {
    fontSize: 20,
    color: "#6633CC",
    fontWeight: "bold",
  },
});
