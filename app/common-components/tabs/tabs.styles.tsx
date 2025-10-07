import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E7EB",
  },
  tab: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#1a237e",
    borderColor: "#ccc",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileContainer: {},
});
