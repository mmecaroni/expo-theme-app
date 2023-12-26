import React from "react";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function AboutRoute() {
  return (
    <View>
      <Text>About Route</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
