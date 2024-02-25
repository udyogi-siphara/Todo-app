import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAppDispatch } from "../redux/store.js";
import { todosActions } from "../redux/todoSlice.js";

const Todo = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
      dispatch(todosActions.addTodo({
        title:text
      }));

      setText('');
      // navigate.navigate("Todo-List");
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Task"

        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom:20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6C627C',
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 10,
    borderWidth:2
  },
  addButton: {
    backgroundColor: 'white',
    borderColor:'#6C627C',
    borderWidth:2,
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#6C627C',
    fontWeight: 'bold',
    fontSize:15
  },
});

export default Todo;
