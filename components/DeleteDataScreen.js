import React from "react";
import {
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  View,
  Alert,
} from "react-native";

export default DeleteDataScreen = () => {
  const [employee_id, onDlelteUser] = React.useState("");

  return (
    <View style={styles.Main}>
      <SafeAreaView>
        <Text style={styles.Text_fix}>ID Employee</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={onDlelteUser}
          value={employee_id}
          style={styles.input}
        />

        <Button
          color="#6633CC"
          title="Delete Employee"
          onPress={() => {
            if (employee_id == "") {
              Alert.alert("Please fill your information completely.");
              return;
            }

            fetch(
              "http://172.21.12.108/mobileapp/deletedb.php?employee_id=" +
                employee_id
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                Alert.alert("Complete!");
              }) //
              .catch((error) => {
                console.error(error);
                Alert.alert("Failed to delete information.");
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
