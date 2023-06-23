import { Animated, StyleSheet } from "react-native";

interface Props {
  scrollX: any;
  width: number;
  images: string[];
}

export const Background = ({ images, width, scrollX }: Props) => {
  return (
    <>
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
    </>
  );
};
