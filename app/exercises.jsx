import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
// import { demoExercises } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();
  // console.log('Got item', item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    // console.log("Got data: ", data);
    setExercises(data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar style="dark" />

        {/*** Featured Image ***/}
        <Image
          // className="rounded-b-[35px]"
          style={{ width: wp(100), height: hp(45) }}
          source={item.image}
        />

        {/*** Close Button ***/}
        <TouchableOpacity
          className="absolute right-0 flex justify-center items-center mt-4 mx-4 pt-1 bg-rose-500 rounded-full"
          style={{ width: hp(5.5), height: hp(5.5) }}
          onPress={() => router.back()}
        >
          <Ionicons name="caret-down-outline" size={hp(4)} color="white" />
        </TouchableOpacity>

        {/*** Exercises ***/}
        <View className="mt-4 mx-4 space-y-3">
          <Text
            className="font-semibold capitalize text-neutral-700"
            style={{ fontSize: hp(3) }}
          >
            {item.name} exercises
          </Text>
          <View>
            <ExerciseList data={exercises} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
