import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import TaskList from '../Components/taskList/Index';
import ModalTask from '../Components/ModalTask';

const MainScreen = ({ taskList }) => {
  const [list, setList] = useState(taskList);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  const onAddTask = () => {
    console.log('se agregó');
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
  };

  const onPressTag = (task) => {
    console.log(task);
    setActiveTask(task);
    setModalVisible(true);
  };

  // console.log(list);
  return (
    <View style={styles.container}>
      <TopBar input={input} onAddTask={onAddTask} setInput={setInput} />
      <TaskList list={list} onPressTag={onPressTag} />
      <ModalTask
        activeTask={activeTask}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
