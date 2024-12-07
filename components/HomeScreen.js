import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Homescreen({ navigation }) {
  return (
    <View style={Stymain1.St1}>
      <Text style={Stymain1.St3_home}>Home</Text>

      <Button
        color="#6633CC"
        title=" GO TO JSON"
        onPress={() => navigation.navigate("Json")}
      />
      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO Clock"
        onPress={() => navigation.navigate("Clock")}
      />
      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO About"
        onPress={() => navigation.navigate("About")}
      />

      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO Insert"
        onPress={() => navigation.navigate("Insert")}
      />

      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO PostData"
        onPress={() => navigation.navigate("PostData")}
      />

      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO DeleteData"
        onPress={() => navigation.navigate("DeleteData")}
      />

      <Text style={Stymain1.St2}>===</Text>
      <Button
        color="#6633CC"
        title=" GO TO UpdateData"
        onPress={() => navigation.navigate("UpdateData")}
      />
      <Text style={Stymain1.St2}>===</Text>
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
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  St3_home: {
    flex: 1,
    fontSize: 55,
    fontWeight: "bold",
    color: "#6633CC",
    justifyContent: "center",
  },
});
