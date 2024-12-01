import { Tabs } from "expo-router"
import React from "react"
import { StatusBar } from "react-native"

import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from "@/constants/Colors"
import Entypo from "@expo/vector-icons/Entypo"
import { HapticTab } from "@/components/HapticTab"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.light,
        tabBarInactiveTintColor: colors.dark,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.deepdark,
          borderColor: colors.deepdark,
          height: 66,
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

      <Tabs.Screen
        name="allsets"
        options={{
          title: "РИБАЛКИ",
          tabBarIconStyle: {
            width: 45,
            height: 45,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="view-list" size={42} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mappage"
        options={{
          title: "КАРТА",
          tabBarIconStyle: {
            width: 45,
            height: 45,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="map" size={42} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="startchat"
        options={{
          title: "ЧАТ",
          tabBarIconStyle: {
            width: 45,
            height: 45,
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={40} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
