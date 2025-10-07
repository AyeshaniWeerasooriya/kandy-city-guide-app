import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(26, 35, 126)",
  },
  middleContainer: {
    width: "75%",
    height: "25%",
    backgroundColor: "rgba(74, 85, 101, 0.5)",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  middleContainerText: {
    color: "white",
    marginBottom: 20,
    fontSize: 12,
    textAlign: "center",
  },
  loginButton: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#000000",
    alignContent: "center",
    paddingVertical: 10,
    justifyContent: "center",
  },
  googleIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  loginButtonText: {
    width: "75%",
    color: "#ffffff",
    alignContent: "center",
    fontSize: 17,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
