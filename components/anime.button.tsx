import { ThemedText } from "@/components/ThemedText"
import { colors } from "@/constants/Colors"
import { ReactNode } from "react"
import { Animated, Pressable } from "react-native"
import { StyleSheet } from "react-native"

interface ButtonAnimeViewProps {
  colorIn?: string
  colorOut?: string
  duration?: number
  value?: number
  children: ReactNode
  onPress: () => void
}

export default function ButtonAnimeView({
  colorIn = colors.dark,
  colorOut = "black",
  duration = 100,
  value = 100,
  children,
  onPress,
}: ButtonAnimeViewProps) {
  const animationValue = new Animated.Value(value)
  const changeColor: Animated.AnimatedInterpolation<string | number> =
    animationValue.interpolate({
      inputRange: [0, value],
      outputRange: [colorOut, colorIn],
    })
  const animeIn: Animated.CompositeAnimation = Animated.timing(animationValue, {
    toValue: 0,
    duration: duration,
    useNativeDriver: true,
  })
  const animeOut: Animated.CompositeAnimation = Animated.timing(
    animationValue,
    {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }
  )

  return (
    <Pressable
      style={styles.buttonPress}
      onPress={onPress}
      onPressIn={() => animeIn.start(() => animeOut.start())}
      // onPressIn={() => animeIn.start()}
      // onPressOut={() => animeOut.start()}
    >
      <Animated.View
        style={{
          ...styles.buttonbox,

          backgroundColor: changeColor,
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  buttonPress: {
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    marginTop: 30,
  },
})
