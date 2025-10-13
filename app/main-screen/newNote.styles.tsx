import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "red",
    height: "100%",
  },
  titleInput: {
    width: "100%",
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E7EB",
  },
  editorContainer: {
    backgroundColor: "pink",
  },
  toolbar: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 0,
  },
  richEditor: {
    borderWidth: 2,
    borderColor: "#8f99aeff",
    borderRadius: 5,
    marginBottom: 2,
    paddingVertical: 5,
    // minHeight: 200,
    // maxHeight: undefined,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    height: 33,
    bottom: 2,
  },
  saveButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  discardButton: {
    backgroundColor: "#9CA3AF",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
