import { Tabs } from "expo-router"
import React from "react"
import { Platform, StatusBar, View } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,

        tabBarActiveTintColor: "#00acac",
        tabBarInactiveTintColor: "#00474f",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#010808",
          borderColor: "#010808",
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
