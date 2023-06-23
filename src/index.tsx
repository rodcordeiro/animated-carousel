import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";
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
  "https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&vertical=center",
];

const { width, height } = Dimensions.get("screen");
const imageSize = {
  width: width * 0.7,
  height: width * 0.7 * 1.54,
};

const Indicator = ({ scrollX }: any) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: height / 10,
        flexDirection: "row",
        gap: 10,
      }}
    >
      {images.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.55, 1.25, 0.55],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.65, 1, 0.65],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${index}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: "white",
              opacity,
              transform: [{ scale }],
              borderColor: "black",
              borderStyle: "solid",
              shadowColor: "#000",
              elevation: 3,
              shadowOpacity: 1,

              shadowRadius: 15,
            }}
          />
        );
      })}
    </View>
  );
};

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
      {images.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={`index_${index}`}
            source={{ uri: item }}
            blurRadius={5}
            style={[
              StyleSheet.absoluteFillObject,
              {
                opacity,
              },
            ]}
          />
        );
      })}
      <Text
        style={{
          position: "absolute",
          top: height * 0.15,
          color: "white",
          fontSize: 25,
          elevation: 2,
          textShadowColor: "#000",
          // textShadowOpacity: 1,
          textShadowRadius: 10,

        }}
      >
        Arts by Samji
      </Text>
      <Animated.FlatList
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 2,
                shadowOffset: {
                  height: 5,
                  width: 5,
                },
              }}
            >
              <Image
                source={{ uri: item }}
                style={{
                  width: imageSize.width,
                  height: imageSize.height,
                  borderRadius: 25,
                }}
                resizeMode="cover"
              />
            </View>
          );
        }}
      />

      <Indicator scrollX={scrollX} />
    </View>
  );
};
