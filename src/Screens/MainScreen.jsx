import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import TaskList from '../Components/taskList/Index';
import ModalTask from '../Components/ModalTask';

const MainScreen = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  const onAddTask = () => {
    console.log('se agregó');
    if (input === '') {
      return alert('agregar tarea por favor');
    }
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
    setInput('');
  };

  const onPressTag = (task) => {
    console.log(task);
    setActiveTask(task);
    setModalVisible(true);
  };

  const onPressStatus = (status) => {
    console.log('si');
    const remainTasks = list.filter((el) => el.id !== activeTask.id);
    const orderedList = [
      ...remainTasks,
      { ...activeTask, completed: status },
    ].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setList(orderedList);
    setModalVisible(false);
  };

  const onDeleteTask = () => {
    const remainTasks = list.filter((el) => el.id !== activeTask.id);
    setList(remainTasks);
    setModalVisible(false);
  };

  console.log(list);
  return (
    <View style={styles.container}>
      <TopBar input={input} onAddTask={onAddTask} setInput={setInput} />
      <TaskList list={list} onPressTag={onPressTag} />
      <ModalTask
        activeTask={activeTask}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPressStatus={onPressStatus}
        onDeleteTask={onDeleteTask}
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
