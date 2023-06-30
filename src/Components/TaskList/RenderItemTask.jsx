import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const RenderItemTask = ({ item, onPressTag }) => {
  return (
    <Pressable onPress={() => onPressTag(item)}>
      <View style={styles.task} key={item.id}>
        <Text>{item.task}</Text>
      </View>
    </Pressable>
  );
};

export default RenderItemTask;

const styles = StyleSheet.create({
  task: {
    width: 200,
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
  },
});
