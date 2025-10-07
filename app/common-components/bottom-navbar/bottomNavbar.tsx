import { usePathname, useRouter } from "expo-router";
import { Home, User } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./bottomNavbar.styles";

export default function BottomNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const isHome = pathname === "/main-screen/home";
  const isProfile = pathname === "/main-screen/profile";

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom > 0 ? insets.bottom + 10 : 16,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push("/main-screen/home")}
      >
        <Home color={isHome ? "#1a237e" : "#888"} size={24} />
        <Text style={[styles.tabText, isHome && styles.activeTabText]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.push("/main-screen/profile")}
      >
        <User color={isProfile ? "#1a237e" : "#888"} size={24} />
        <Text style={[styles.tabText, isProfile && styles.activeTabText]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
