import React from "react";
import { LogBox, View, Text } from "react-native";
import { Stack } from "expo-router";

export default function _layout() {
  // Figure this Warning out later
  LogBox.ignoreLogs(["Warning: Failed prop type"]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
