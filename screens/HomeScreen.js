import { View, Image, StyleSheet, TouchableOpacity,Text} from 'react-native';
import logo from '../assets/todo_icon.png';
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
    const navigate = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={logo} style={styles.image} resizeMode="contain"/>
        <Text style={{ color: "#23143B", fontSize: 30, textAlign: "center", fontWeight:"bold"}}>
            Todo-List
        </Text>
        <TouchableOpacity
            onPress={() => {
              navigate.navigate("Login");
            }}
            style={{
              backgroundColor: "#23143B",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              width: "70%",
              marginTop: 200
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center", fontWeight:"bold"}}>
              Continue
            </Text>
          </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee', // Background color
    },
    image: {
      width: 150, // Width of the image
      height: 150, // Height of the image
      marginBottom: 20, // Margin bottom
    },
  });

export default HomeScreen;
