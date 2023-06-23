import { View, Animated } from "react-native";
interface Props {
  scrollX: any;
  height: number;
  width: number;
  images: Array<string>;
}
export const Indicator = ({ scrollX, height, images, width }: Props) => {
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
