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

export default UpdateScreen = () => {
  const [first_name, onChangeFrstName] = React.useState("");
  const [last_name, onChangeLastName] = React.useState("");
  const [employee_id, onChangeemployee_id] = React.useState("");
  const [data, setData] = React.useState([]);

  return (
    <View style={styles.Main}>
      <SafeAreaView>
        <Text style={styles.Text_fix}>Employee_id</Text>
        <TextInput
          keyboardType="numeric"
          value={employee_id}
          onChangeText={onChangeemployee_id}
          style={styles.input}
        />

        <Text style={styles.Text_fix}>First Name</Text>
        <TextInput
          value={first_name}
          onChangeText={onChangeFrstName}
          style={styles.input}
        />

        <Text style={styles.Text_fix}>Last Name</Text>
        <TextInput
          value={last_name}
          onChangeText={onChangeLastName}
          style={styles.input}
        />

        <Button
          color="#6633CC"
          title="Update Data"
          onPress={() => {
            if (first_name === "" || last_name === "" || employee_id === "") {
              Alert.alert("Please fill your information completely.");
              return;
            }
            fetch(
              "http://172.21.12.108/mobileapp/updatedb.php?first_name=" +
                first_name +
                "&last_name=" +
                last_name +
                "&employee_id=" +
                employee_id
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                Alert.alert("Complete!");
              })

              .catch((error) => {
                console.error(error);
                Alert.alert("Unable to edit information.");
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
