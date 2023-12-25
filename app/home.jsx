import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 flex space-y-5 bg-white" edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        {/*** Header Left ***/}
        <View className="space-y-2">
          <Text
            className="font-bold text-neutral-700 tracking-wider uppercase"
            style={{ fontSize: hp(4.5) }}
          >
            Ready to
          </Text>
          <Text
            className="font-bold text-rose-500 tracking-wider uppercase"
            style={{ fontSize: hp(4.5) }}
          >
            Workout
          </Text>
        </View>

        {/*** Header Right ***/}
        <View className="flex justify-center items-center space-y-2">
          <Image
            className="rounded-full"
            style={{ width: hp(6), height: hp(6) }}
            source={require("../assets/images/avatar.png")}
          />
          <View
            className="flex justify-center items-center bg-neutral-200 border-[3px] border-neutral-300 rounded-full"
            style={{ width: hp(5.5), height: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/*** Carousel ***/}
      <View>
        <ImageSlider />
      </View>

      {/*** Content: Body Parts List ***/}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
