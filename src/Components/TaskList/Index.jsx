import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import RenderItemTask from './RenderItemTask';

const TaskList = ({ list, onPressTag }) => {
  return (
    <View style={styles.view2}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => RenderItemTask({ item, onPressTag })}
      />
      {/* {list.map((el, index) => {
      return (
      );
    })} */}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  view2: {
    flex: 8,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
