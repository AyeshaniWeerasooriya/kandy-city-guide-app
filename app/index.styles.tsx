// app/styles/splashStyles.ts
import { StyleSheet } from "react-native";

export const getSplashStyles = (scale: (size: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    overlay: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    title: {
      fontSize: scale(24),
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
      paddingHorizontal: 20,
      paddingVertical: 2,
    },
    subtitle: {
      fontSize: scale(24),
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
      paddingHorizontal: 20,
    },
  });
