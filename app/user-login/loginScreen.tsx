import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./loginScreen.styles";

export default function LoginScreen() {
  return (
    <View style={style.container}>
      <View style={style.middleContainer}>
        <Text style={style.middleContainerText}>
          Securely access your courses and notes
        </Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => router.push("/main-screen/home")}
        >
          <Image
            style={style.googleIcon}
            source={require("../../assets/google.svg")}
          />
          <Text style={style.loginButtonText}>Sign-in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
