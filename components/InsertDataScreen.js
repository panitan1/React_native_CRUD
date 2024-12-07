import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Alert,
} from "react-native";

export default InsertDataScreen = () => {
  const [first_name, OnchangFirstName] = React.useState("");
  const [last_name, OnchangLastName] = React.useState("");
  const [data, setData] = React.useState("");
  return (
    <View style={styles.Main}>
      <SafeAreaView>
        <Text style={styles.Text_fix}>First Name</Text>
        <TextInput
          onChangeText={OnchangFirstName}
          value={first_name}
          style={styles.input}
        />
        <Text style={styles.Text_fix}>Last Name</Text>
        <TextInput
          onChangeText={OnchangLastName}
          value={last_name}
          style={styles.input}
        />

        <Button
          color="#6633CC"
          title="Insret Data"
          onPress={() => {
            if (first_name === "" || last_name == "") {
              Alert.alert("Please fill your information completely.");
              return;
            }
            fetch(
              "http://172.21.12.108/mobileapp/insertdb.php?first_name=" +
                first_name +
                "&last_name=" +
                last_name
            )
              .then((response) => response.json())
              .then((json) => {
                setData(json);
                console.log(json);
              })
              .then((data) => {
                console.log(data);
                Alert.alert("Complete!");
              })
              .catch((error) => {
                console.error(error);
                Alert.alert("Unable to add information.");
              });
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Text_fix: {
    color: "#6633CC",
    fontWeight: "bold",
    fontSize: 33,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius: 23,
    borderColor: "#6633CC",
    color: "#6633CC",
    fontWeight: "bold",
  },
  Main: {
    backgroundColor: "#FFCCFF",
    flex: 1,
  },
});
