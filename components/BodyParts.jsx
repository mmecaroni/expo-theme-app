import React from "react";
import { useRouter } from "expo-router";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        className="mx-auto mt-4 mb-8 font-semibold uppercase text-neutral-700"
        style={{ fontSize: hp(3) }}
      >
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ router, item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        className="flex justify-end mb-4 p-4"
        style={{ width: wp(44), height: wp(52) }}
        onPress={() => router.push({ pathname: "/exercises", params: item })}
      >
        <Image
          className="absolute rounded-[35px]"
          style={{ width: wp(44), height: wp(52) }}
          resizeMode="cover"
          source={item.image}
        />

        <LinearGradient
          className="absolute bottom-0 rounded-b-[35px]"
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <Text
          className="text-center font-semibold text-white capitalize tracking-wide"
          style={{ fontSize: hp(2.3) }}
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
