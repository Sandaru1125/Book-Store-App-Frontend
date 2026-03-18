import { View,Text,Image } from "react-native";
import styles from "../assets/styles/login.styles";
import { Link } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-web";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
  
  };

  return (
    <View style={styles.container}>
      <View style={styles.topIllustration}>

        <Image
          source={require("../assets/images/Curious-bro.png")}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>
      <Text>login</Text>

      <View style={styles.card}>
        <View style={styles.formContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={!showPassword}
          />
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
            onPress={() => setShowPassword(!showPassword)}
          />


        </View>



    </View>
  );
}