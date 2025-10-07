import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="user-login/loginScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="main-screen/home"
        options={{
          headerShown: true,
          title: "StudyFlow",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="main-screen/profile"
        options={{
          headerShown: true,
          title: "StudyFlow",
          headerLeft: () => null,
        }}
      />
    </Stack>
  );
}
