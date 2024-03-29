import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import LoginScreens from './screens/LoginScreens';
import SignupScreen from './screens/SignupScreen';
import Empty from './screens/Empty.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreens} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
        <Stack.Screen name="Todo-List" component={Empty} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;