import React from "react";
import { View, Text } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { sliderImages } from "../constants";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      // Turn loop={false} to 'true' to make the carousel loop constantly (console throws error bc it creates a large list and could effect memory usage/performance, but it would be ok)
      loop={false}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        containerStyle={{ flex: 1, borderRadius: 30 }}
        style={{ resizeMode: "contain" }}
        source={item}
        parallaxFactor={0.8}
        {...parallaxProps}
      />
    </View>
  );
};
