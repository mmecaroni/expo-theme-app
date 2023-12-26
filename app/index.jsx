import React from "react";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function IndexRoute() {
  return (
    <View className="bg-green-500">
      <Text>Index Route</Text>
      <Link href="/about">About</Link>
    </View>
  );
}
