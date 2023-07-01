import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TopBar = ({ input, setInput, onAddTask }) => {
  return (
    <View style={styles.view1}>
      <TextInput
        style={styles.input}
        placeholder='ingresar tarea'
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity
        title='Agregar tareas'
        style={styles.buttonAdd}
        onPress={onAddTask}
      >
        <Text style={styles.btnText}> Agregar </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  view1: {
    flex: 2,
    width: '100%',
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'violet',
    borderBottomWidth: 3,
    width: 150,
    height: 20,
    marginBottom: 8,
  },
  buttonAdd: {
    paddingHorizontal: 10,
    width: 150,
    height: 40,
    backgroundColor: 'violet',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  btnText: {
    fontSize: 10,
    textAlign: 'center',
  },
});
