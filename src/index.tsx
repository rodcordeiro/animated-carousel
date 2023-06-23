import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { Indicator } from "./Components/Indicator";
import { List } from "./Components/List";
import { Background } from "./Components/Background";
const images = [
  "https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/9432617/media/139bd3b4fea5c6b3d31e9cd8b7245f85.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/userupload/3365071/file/original-c9b7d31cbf7de78e0ba92c4c6d41d4fc.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/8159457/media/9e7bfb83b0bd704e941baa7a44282b22.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/11760493/media/9bb379304ad9da048af8487d8d48ba86.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&vertical=center",
  "https://cdn.dribbble.com/users/3281732/screenshots/12282918/media/a0c8e9156be236ae2374fc794a4edf86.jpg?compress=1&vertical=center",
];

const { width, height } = Dimensions.get("screen");

export const Carousel = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background
        key="background_container"
        images={images}
        scrollX={scrollX}
        width={width}
      />
      <Text
        style={{
          position: "absolute",
          top: height * 0.15,
          color: "#f0f0f0",
          fontSize: 25,
          elevation: 2,
          textShadowColor: "#000",
          textShadowRadius: 10,
          fontFamily: "RocketSalt",
        }}
      >
        Arts by Samji
      </Text>
      <List
        key="carousel_container"
        images={images}
        scrollX={scrollX}
        width={width}
      />
      <Indicator
        key="indicator_container"
        scrollX={scrollX}
        height={height}
        images={images}
        width={width}
      />
    </View>
  );
};
