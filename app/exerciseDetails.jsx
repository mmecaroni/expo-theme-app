import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();
  // console.log('Got item', item);

  return (
    <View className="flex flex-1">
      <View className="bg-neutral-200 rounded-[35px] shadow-md">
        <Image
          className="rounded-b-[35px]"
          style={{ width: wp(100), height: wp(100) }}
          contentFit="cover"
          source={{ uri: item.gifUrl }}
        />
      </View>

      <TouchableOpacity
        className="absolute right-0 mt-2 mx-2 rounded-full mt"
        onPress={() => router.back()}
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/*** Details ***/}
      <ScrollView
        className="mt-3 mx-4 space-y-2"
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/*** Name ***/}
        <Animated.Text
          className="font-semibold capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(3.5) }}
          entering={FadeInDown.duration(300).springify()}
        >
          {item.name}
        </Animated.Text>

        {/*** Equipment ***/}
        <Animated.Text
          className="capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInDown.duration(300).delay(100).springify()}
        >
          <Text className="font-semibold capitalize text-neutral-700">
            equipment:{" "}
          </Text>
          <Text className="capitalize">{item?.equipment}</Text>
        </Animated.Text>

        {/*** Secondary Muscles ***/}
        <Animated.Text
          className="capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInDown.duration(300).delay(200).springify()}
        >
          <Text className="font-semibold capitalize text-neutral-700">
            secondary muscles:{" "}
          </Text>
          <Text className="capitalize">{item?.secondaryMuscles}</Text>
        </Animated.Text>

        {/*** Target Muscle ***/}
        <Animated.Text
          className="capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInDown.duration(300).delay(300).springify()}
        >
          <Text className="font-semibold capitalize text-neutral-700">
            target muscle:{" "}
          </Text>
          <Text className="capitalize">{item?.target}</Text>
        </Animated.Text>

        {/*** Instructions ***/}
        <Animated.Text
          className="font-semibold capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(3) }}
          entering={FadeInDown.duration(300).delay(400).springify()}
        >
          Instructions
        </Animated.Text>
        {item.instructions.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              key={index}
              className="text-neutral-700"
              style={{ fontSize: hp(1.7) }}
              entering={FadeInDown.duration(300)
                .delay((index + 6) * 100)
                .springify()}
            >
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
