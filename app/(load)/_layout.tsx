import { Tabs } from "expo-router"
import React from "react"
import { Platform, StatusBar, View } from "react-native"

import { colors, Colors } from "@/constants/Colors"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,

        tabBarActiveTintColor: colors.light,
        tabBarInactiveTintColor: colors.dark,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.deepdark,
          borderColor: colors.deepdark,
          height: 0,
        },
      }}
    >
      <StatusBar barStyle={"light-content"} />

      <Tabs.Screen
        name="index"
        options={{
          title: "ІНФОРМАЦІЯ",
          tabBarIconStyle: {
            width: 45,
            height: 45,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="announcement" size={42} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
