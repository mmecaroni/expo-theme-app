import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseList({ data }) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ router, item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        className="flex py-3 space-y-2"
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
      >
        <View className="bg-neutral-200 rounded-[35px] shadow">
          <Image
            className="rounded-[35px]"
            style={{ width: wp(44), height: wp(52) }}
            contentFit="cover"
            source={{ uri: item.gifUrl }}
          />
        </View>

        <Text
          className="font-semibold capitalize text-neutral-700 tracking-wide"
          style={{ fontSize: hp(1.7) }}
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
