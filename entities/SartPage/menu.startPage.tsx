import { View, StatusBar, Pressable, Animated } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { ThemedText } from "@/components/ThemedText"
import { default as styles } from "@/entities/SartPage/menu.styles.startpage"
import { exitLogin } from "@/hooks/exitApp"
import { Link } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { borderRadiusMyf, colors } from "@/constants/Colors"
import { useAtom } from "jotai"
import {
  mapResByUserAtom,
  mapResponseAtom,
  userAtom,
} from "@/store/store.state"
import Entypo from "@expo/vector-icons/Entypo"
import { useState } from "react"

export default function MenuStartPage() {
  const [atomUserState] = useAtom(userAtom)
  const [atomAllSetState, setAtomMapResState] = useAtom(mapResponseAtom)
  const [atomUserSetState, setAtomMapResUserState] = useAtom(mapResByUserAtom)
  const [hideMenu, setHideMenu] = useState<boolean>(true)
  const [activeExitBtn, setActiveExitBtn] = useState<boolean>(false)
  const [activeLinkBtn, setActiveLinkBtn] = useState<boolean>(false)

  const animationValueLeft = new Animated.Value(0)
  const animationValueRigt = new Animated.Value(-300)
  const toLeft = Animated.timing(animationValueLeft, {
    toValue: -300,
    duration: 400,
    useNativeDriver: true,
  })
  const toRight = Animated.timing(animationValueRigt, {
    toValue: 0,
    duration: 400,
    useNativeDriver: true,
  })

  const hidenMenu = () => {
    toLeft.start(() => setHideMenu(false))
  }
  const viewMenu = () => {
    toRight.start(() => setHideMenu(true))
  }

  return (
    <Pressable onTouchStart={() => hidenMenu()} style={styles.box}>
      <Animated.View
        style={{
          ...styles.container,
          translateX: hideMenu ? animationValueLeft : animationValueRigt,
        }}
      >
        <View
          onTouchStart={(e) => {
            e.stopPropagation()
          }}
          style={styles.closemenu}
        >
          <Pressable
            onTouchStart={hideMenu ? () => hidenMenu() : () => viewMenu()}
          >
            {hideMenu ? (
              <MaterialIcons name="menu-open" size={45} color={colors.light} />
            ) : (
              <Entypo name="menu" size={45} color={colors.light} />
            )}
          </Pressable>
        </View>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.content}>
          <ThemedText type="subtitle" style={styles.contentText}>
            Користувач:
          </ThemedText>
          <ThemedText type="title" style={styles.contentTextTitle}>
            {atomUserState.login}
          </ThemedText>
          <ThemedText type="default" style={styles.contentText}>
            Загальна кількість записів: {atomAllSetState.length}
          </ThemedText>
          <ThemedText type="default" style={styles.contentText}>
            Моїх записів: {atomUserSetState.length}
          </ThemedText>
        </View>
        <View style={styles.btns}>
          <View
            style={styles.Linkbox}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: borderRadiusMyf,
                backgroundColor: activeLinkBtn ? colors.deepdark : colors.dark,
              }}
              onTouchStart={() => setActiveLinkBtn(true)}
              onTouchEnd={() => setActiveLinkBtn(false)}
            >
              <Link href={`https://victorivanets.github.io/fishapp/`}>
                <ThemedText
                  style={{
                    ...styles.icon,
                    color: activeLinkBtn ? colors.light : colors.lightText,
                  }}
                  type="default"
                >
                  ВЕБ ВЕРСІЯ ДОДАТКУ
                </ThemedText>
              </Link>
            </View>
          </View>

          <Pressable
            style={styles.buttonbox}
            onPress={() => {
              exitLogin()
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
          >
            <View
              onTouchStart={() => setActiveExitBtn(true)}
              onTouchEnd={() => setActiveExitBtn(false)}
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                borderRadius: borderRadiusMyf,
                backgroundColor: activeExitBtn ? colors.deepdark : colors.dark,
              }}
            >
              <View style={styles.btnitem}>
                <ThemedText
                  style={{
                    ...styles.colorWhite,
                    color: activeExitBtn ? colors.light : colors.lightText,
                  }}
                  type="subtitle"
                >
                  EXIT
                </ThemedText>
              </View>

              <View style={styles.btnitem}>
                <Ionicons
                  style={styles.icon}
                  name="exit-outline"
                  size={30}
                  color={activeExitBtn ? colors.lightText : colors.light}
                />
              </View>
            </View>
          </Pressable>
        </View>
        <View>
          <ThemedText style={styles.contentTextMin} type="mintext">
            інформація у загальному користуванні!
          </ThemedText>
          <ThemedText style={styles.contentTextMin} type="mintext">
            Усі користувачі можуть бачити усі місця!
          </ThemedText>
        </View>
      </Animated.View>
    </Pressable>
  )
}
