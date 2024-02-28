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
import { useAppDispatch } from '../redux/store.js';
import { userActions } from "../redux/userSlice.js";

const SignupScreen = () => {
    const navigate = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
      navigate.navigate("Login");
  };

    return (

        <View
         style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            paddingLeft: 25,
            paddingRight:25,
          }}>
          <Text
            style={{
              fontSize: 34,
              marginBottom: 20,
              color: "#23143B",
              fontWeight:500
            }}
          >
            Signup
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
            onPress={handleSignup}
            style={{
              backgroundColor: "#6C627C",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Signup
            </Text>
          </TouchableOpacity>
          <Text style={{marginTop:30}} onPress={() => {
              navigate.navigate("Login");
            }}>
            Already have an account?Login 
          </Text>
          <Image source={login} style={styles.image} resizeMode="contain"/>
        </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    image: {
      width: 150, 
      height: 150, 
      marginTop: 50, 
      marginLeft:130,
      
    },
  });

  export default SignupScreen;
