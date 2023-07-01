import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const RenderItemTask = ({ item, onPressTag }) => {
  return (
    <Pressable onPress={() => onPressTag(item)}>
      <View
        style={item.completed ? styles.completedTask : styles.task}
        key={item.id}
      >
        <Text>{item.task}</Text>
      </View>
    </Pressable>
  );
};

export default RenderItemTask;

const styles = StyleSheet.create({
  task: {
    width: 200,
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
  },
  completedTask: {
    width: 200,
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 10,
  },
});
