import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import React, { useEffect } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../lib/firebaseConfig";
import { style } from "./loginScreen.styles";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "678698554369-auvrfmteehvnof2fj8sev85ate2j18iu.apps.googleusercontent.com",
    iosClientId:
      "678698554369-fet933fbjjpmbaf3tu9hb0jb4dujf10i.apps.googleusercontent.com",
    androidClientId:
      "678698554369-nc5qhd4me7ppi31e6oo5nki0c7hdnvu1.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert("Success", "You are logged in!");
          router.push("/main-screen/home");
        })
        .catch((error) => {
          Alert.alert("Login failed", error.message);
        });
    }
  }, [response]);

  return (
    <View style={style.container}>
      <View style={style.middleContainer}>
        <Text style={style.middleContainerText}>
          Securely access your courses and notes
        </Text>

        <TouchableOpacity
          style={style.loginButton}
          disabled={!request}
          onPress={() => promptAsync()}
        >
          <Image
            style={style.googleIcon}
            source={require("../../assets/google.png")}
          />
          <Text style={style.loginButtonText}>Sign-in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// import { router } from "expo-router";
// import React from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { style } from "./loginScreen.styles";

// export default function LoginScreen() {
//   const handleLogin = () => {
//     router.push("/main-screen/home");
//   };

//   return (
//     <View style={style.container}>
//       <View style={style.middleContainer}>
//         <Text style={style.middleContainerText}>
//           Securely access your courses and notes
//         </Text>

//         <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
//           <Image
//             style={style.googleIcon}
//             source={require("../../assets/google.png")}
//           />
//           <Text style={style.loginButtonText}>Sign-in with Google</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
