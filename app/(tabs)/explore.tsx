import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore</Text>
      </View>

      {/* Description */}
      <Text style={styles.paragraph}>
        This app includes example code to help you get started.
      </Text>

      {/* File-based routing */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>File-based routing</Text>
        <Text>
          This app has two screens:{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/index.tsx</Text> and{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/explore.tsx</Text>.
        </Text>
        <Text>
          The layout file in{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/_layout.tsx</Text> sets
          up the tab navigator.
        </Text>
      </View>

      {/* Android, iOS, and web */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Android, iOS, and web support</Text>
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text style={{ fontWeight: "600" }}>{`"w"`}</Text>{" "}
          in the terminal running this project.
        </Text>
      </View>

      {/* Images */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Images</Text>
        <Text>
          For static images, you can provide multiple resolutions with{" "}
          <Text style={{ fontWeight: "600" }}>@2x</Text> and{" "}
          <Text style={{ fontWeight: "600" }}>@3x</Text> suffixes.
        </Text>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginVertical: 8,
          }}
        />
      </View>

      {/* Light/Dark mode */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Light and dark mode components</Text>
        <Text>
          This template has light and dark mode support. The{" "}
          <Text style={{ fontWeight: "600" }}>useColorScheme()</Text> hook lets
          you inspect the user&apos;s current color scheme.
        </Text>
      </View>

      {/* Animations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Animations</Text>
        <Text>
          This template includes an example of an animated component using{" "}
          <Text style={{ fontFamily: "monospace", fontWeight: "600" }}>
            react-native-reanimated
          </Text>
          .
        </Text>
        {Platform.OS === "ios" && (
          <Text>
            The ParallaxScrollView component provides a parallax effect for the
            header image.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
});
