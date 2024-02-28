import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Todo from '../components/Todo.js';
import empty from '../assets/empty.png';
import { todoSlice } from "../redux/todoSlice.js";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../redux/store.js';
import EditIcon from "../assets/edit-icon.png"
import DeleteIcon from "../assets/delete-icon.png"

const Empty = () => {
  const [loading, setLoading] = useState(true);
  const todos = useSelector(state => state.todos.todos); 
  const dispatch = useAppDispatch();
  const [isUpdate,setIsUpdate] = useState(false); 
  const [title,setTitle] = useState(""); 

  useEffect(() => {
    setLoading(false);
  }, [dispatch]);


  const handleUpdateTodo = (id) => {
    setIsUpdate(true);
    setTitle(id);
  };

  const handleDeleteTodo = (id) => {
    dispatch(todoSlice.actions.deleteTodo({
      title: id,
    }));
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#23143B', textAlign: 'left', fontSize: 25, fontWeight: 200, marginTop: 20 }}>Hi! Udyogi</Text>
      {todos.length==0 ? (
        <View style={styles.imageContainer}>
          <Image source={empty} style={styles.image} resizeMode="contain" />
        </View>
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.title}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo(item.title)}>
                  <Image source={EditIcon} width={20} height={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => handleDeleteTodo(item.title)}>
                <Image source={DeleteIcon} width={20} height={20}/>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.title}
        />
      )} 
      <Todo isUpdate={isUpdate} title={title} setIsUpdate={setIsUpdate} setTitle={setIsUpdate}/>
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
