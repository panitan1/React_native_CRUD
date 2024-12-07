import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default JsonScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch("http://172.21.12.108/mobileapp/showmobiledb.php")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <View style={styles.table}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Employee ID</Text>
            <Text style={styles.headerText}>First Name</Text>
            <Text style={styles.headerText}>Last Name</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.employee_id}</Text>
                <Text style={styles.cell}>{item.first_name}</Text>
                <Text style={styles.cell}>{item.last_name}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFCCFF",
  },
  loadingText: {
    color: "#6633CC",
    fontWeight: "bold",
    fontSize: 55,
    textAlign: "center",
  },
  table: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#6633CC",
    padding: 10,
  },
  headerText: {
    color: "#F8F8FF",
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "#6633CC",
    borderBottomWidth: 1,
  },
  cell: {
    color: "#6633CC",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1,
    textAlign: "center",
  },
});
