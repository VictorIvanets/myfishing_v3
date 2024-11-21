import { Tabs } from "expo-router"
import React from "react"
import { Platform, StatusBar, View } from "react-native"

import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { colors, Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { HapticTab } from "@/components/ui/HapticTab"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,

        tabBarActiveTintColor: colors.light,
        tabBarInactiveTintColor: colors.dark,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
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
