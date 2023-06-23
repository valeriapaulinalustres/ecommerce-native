import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const MainScreen = ({ taskList }) => {
  console.log(taskList);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput style={styles.input} />
        <Button title="Agregar tareas" style={styles.button} />
      </View>
      <View style={styles.view2}>
        {taskList.map((el, index) => {
          return (
            <View style={styles.task} key={index}>
              <Text>{el.task}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex: 2,
    width: "100%",
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 8,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderBottomColor: "purple",
    borderBottomWidth: 3,
    width: 150,
    height: 20,
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 10,
    width: 150,
    height: 40,
  },
  task: {
    width: "80%",
    backgroundColor: "yellow",
    padding: 10,
    margin: 10,
  },
});
