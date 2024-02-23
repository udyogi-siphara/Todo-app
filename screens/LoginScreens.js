import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground
  } from "react-native";
  import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import login from '../assets/login.png';

const LoginScreens = () => {
    const navigate = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <ImageBackground style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width:"98%",
            height:"95%",
        }} source={login} resizeMode="cover">
        <View
         style={{
            justifyContent: "center",
            alignItems: "center",
            width: 330,
            height: 300,
            padding: 20,
            elevation: 1,
            borderRadius: 10,
          }}>
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
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            
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
              navigate.navigate("Main");
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
          <Text onPress={() => {
              navigate.navigate("Signup");
            }}>
            You haven't an account?Signup 
          </Text>
        </View>
    </ImageBackground>
      
    );
  };
  
  export default LoginScreens;
