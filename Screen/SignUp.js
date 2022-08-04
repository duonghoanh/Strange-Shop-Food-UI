import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

export default function SignUp() {
  const navigation = useNavigation(); // to navigate to other screens
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <StatusBar />
        <Image
          style={styles.image}
          source={require("../assets/strangeLogo.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#f6a14c",
            marginBottom: 150,
          }}
        >
          Go to the <Text style={{ color: "#4a8bf5" }}>Strange. </Text> Go to
          hungry stomach
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
        </TouchableOpacity>
          <Text style={{color:'chocolate'}}>Have an account?😋👉🏽<Text style={{ color: "#ff0000",fontWeight:'bold'}} onPress={() => navigation.navigate("Login")}>Login</Text>👈🏽</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    // flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    alignItems: "center",
    width: 300,
    height: 50,
    resizeMode: "contain",
  },

  inputView: {
    backgroundColor: "#f4d7ea",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    color: "#ff0000",
  },

  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4a8bf5",
  },
});
