import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
  } from "react-native";
  import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import login from '../assets/login.png';

const LoginScreens = () => {
    const navigate = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View
         style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 25,
            paddingRight:25,
            elevation: 1,
            borderRadius: 10,
          }}>
          <Image source={login} style={styles.image} resizeMode="contain"/>
          <Text
            style={{
              fontSize: 34,
              marginBottom: 20,
              color: "#23143B",
              fontWeight:500
            }}
          >
            Log In
          </Text>
          <TextInput
            placeholder="User name"
            value={username}
            onChangeText={(text) => setUsername(text)}
            
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "#23143B",
              borderRadius: 5,
              width: "100%",
              marginBottom: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "#23143B",
              borderRadius: 5,
              width: "100%",
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Todo-List");
            }}
            style={{
              backgroundColor: "#6C627C",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Log In
            </Text>
          </TouchableOpacity>
          <Text style={{marginTop:30}} onPress={() => {
              navigate.navigate("Signup");
            }}>
            You haven't an account?Signup 
          </Text>
        </View>
    
      
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 150, // Width of the image
      height: 150, // Height of the image
      marginTop:80, // Margin bottom
    },
  });

  
  export default LoginScreens;
