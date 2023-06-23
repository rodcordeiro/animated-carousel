import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Carousel } from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
