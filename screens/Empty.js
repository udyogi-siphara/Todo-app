import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Todo from '../components/Todo.js';
import empty from '../assets/empty.png';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { todosActions } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../redux/store.js';

const Empty = () => {
  const [loading, setLoading] = useState(true);
  const todos = useSelector(state => state.todos.todos); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(todos);
    dispatch(todosActions.fetchTodos()); 
    setLoading(false);
  }, [dispatch]);

  const handleAddTodo = (text) => {
    dispatch(todosActions.addTodo({
      title: text,
    }));
  };

  const handleUpdateTodo = (id) => {
    dispatch(todosActions.updateTodo({
      id: id,
    }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(todosActions.deleteTodo({
      id: id,
    }));
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#23143B', textAlign: 'left', fontSize: 25, fontWeight: 200, marginTop: 20 }}>Hi! Udyogi</Text>
      {todos ? (
        <View style={styles.imageContainer}>
          <Image source={empty} style={styles.image} resizeMode="contain" />
        </View>
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.text}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo(item.id)}>
                  <Text style={styles.buttonText}><AiFillEdit /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => handleDeleteTodo(item.id)}>
                  <Text style={styles.buttonText}><AiFillDelete /></Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
      <Todo onAdd={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  todoItem: {
    backgroundColor: "#9D96A7",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft: 10,
    gap: 5
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#23143B',
    fontSize: 20
  },
});

export default Empty;
