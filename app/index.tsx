import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { getSplashStyles } from "./index.styles";
import { useScale } from "./utils/scale";

export default function SplashScreen() {
  const { scale } = useScale();
  const styles = getSplashStyles(scale);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/user-login/loginScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/splash-bg.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Our </Text>
        <Text style={styles.subtitle}>Study Flow</Text>
      </View>
    </ImageBackground>
  );
}
