import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the BookStore App!</Text>

      <Link href="/(auth)" style={styles.link}>
        Go to Login
      </Link>
      <Link href="/(auth)/signup" style={styles.link}>
        Go to Signup
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  link: {
    fontSize: 18,
    color: "#007bff",
    marginVertical: 10,
  },
});
