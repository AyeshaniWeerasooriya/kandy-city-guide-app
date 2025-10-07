import React from "react";
import { Text, View } from "react-native";
import BottomNavbar from "../common-components/bottom-navbar/bottomNavbar";
import { styles } from "./profile.styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text> Profile Page (empty for now)</Text>
      <View style={styles.bottomNavContainer}>
        <BottomNavbar />
      </View>
    </View>
  );
}
