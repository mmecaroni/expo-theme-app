import React from "react";
import { Stack } from "expo-router";
import "../assets/styles/app.css";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="about" />
    </Stack>
  );
}
