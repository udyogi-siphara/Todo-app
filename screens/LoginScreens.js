import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const LoginScreens = () => {
    const navigate = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 330,
            height: 300,
            padding: 20,
            elevation: 1,
            borderRadius: 10,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Text
            style={{
              fontSize: 34,
              marginBottom: 20,
              color: "gray",
            }}
          >
            Login In
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "#e3e3e3",
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
              borderColor: "#e3e3e3",
              borderRadius: 5,
              width: "100%",
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Signup");
            }}
            style={{
              backgroundColor: "lightblue",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Login In
            </Text>
          </TouchableOpacity>
        </View>
      
    );
  };
  
  export default LoginScreens;