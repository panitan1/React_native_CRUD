import React from "react";
import {
  Text,
  SafeAreaView,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  View,
  Alert,
} from "react-native";

export default PostDataScreen = () => {
  const [first_name, onChangeFrstName] = React.useState("");
  const [last_name, onChangeLastName] = React.useState("");
  const [data, setData] = React.useState([]);

  return (
    <View style={styles.Main}>
      <SafeAreaView>
        <Text style={styles.Text_fix}>First Name</Text>
        <TextInput
          onChangeText={onChangeFrstName}
          value={first_name}
          style={styles.input}
        />

        <Text style={styles.Text_fix}>Last Name</Text>
        <TextInput
          onChangeText={onChangeLastName}
          value={last_name}
          style={styles.input}
        />

        <Button
          color="#6633CC"
          title="Post Data"
          onPress={() => {
            if (first_name === "" || last_name === "") {
              Alert.alert("Please fill your information completely.");
              return;
            }
            var datap = new FormData();
            datap.append("first_name", first_name);
            datap.append("last_name", last_name);

            fetch("http://172.21.12.108/mobileapp/postdb.php", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
              },
              body: datap,
            })
              .then((response) => response.json())

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
  data_txt: {
    color: "#f8dcfd",
    fontWeight: "bold",
    fontSize: 15,
  },
  Main: {
    backgroundColor: "#FFCCFF",
    flex: 1,
  },
});
