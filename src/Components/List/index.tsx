import { Animated, View, Image } from "react-native";
interface Props {
  scrollX: any;
  images: Array<string>;
  width: number;
}

export const List = ({ images, width, scrollX }: Props) => {
  const imageSize = {
    width: width * 0.7,
    height: width * 0.7 * 1.54,
  };

  return (
    <Animated.FlatList
      data={images}
      horizontal
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
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
  );
};
