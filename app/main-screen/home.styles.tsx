import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: { marginHorizontal: 0 },
  middleContainer: {
    paddingHorizontal: 5,
  },
  createNoteContainer: {
    fontSize: 18,
  },
  showNotesContainer: {
    fontSize: 18,
  },
  bottomNavContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
});
