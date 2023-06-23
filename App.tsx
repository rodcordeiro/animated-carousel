import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Carousel } from "./src";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RocketSalt: require("./assets/fonts/RockSalt-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
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
