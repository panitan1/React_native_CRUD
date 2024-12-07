import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ClockScreen() {
  const [time, setTime] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={Stymain1.St1}>
      <Text style={Stymain1.St2}>{time}</Text>
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
