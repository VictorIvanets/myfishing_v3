import { Animated, View } from "react-native"
import { ThemedText } from "./ThemedText"
import { colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"
import { useEffect, useState } from "react"

interface AlertProps {
  error: string | undefined
}

export default function AlertError({ error }: AlertProps) {
  const [errorState, setErrorState] = useState<string | undefined>(undefined)

  const animationValueTop = new Animated.Value(-10)
  const toUp = Animated.timing(animationValueTop, {
    toValue: -550,
    duration: 1000,
    useNativeDriver: true,
  })

  const animationValue = new Animated.Value(100)
  const changeColor = animationValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["black", "red"],
  })
  const animeIn = Animated.timing(animationValue, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  })

  useEffect(() => {
    animeIn.start(() => toUp.start())
  })

  useEffect(() => {
    if (!error) return
    setErrorState(error)

    const timer = setTimeout(() => {
      setErrorState(undefined)
    }, 2000)
    return () => clearTimeout(timer)
  }, [error])

  return (
    <>
      {errorState && (
        <Animated.View
          style={{
            ...styles.container,
            backgroundColor: changeColor,
            translateY: animationValueTop,
          }}
        >
          <ThemedText style={{ textAlign: "center" }} type="default">
            {errorState}
          </ThemedText>
        </Animated.View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 5,
  },
})
