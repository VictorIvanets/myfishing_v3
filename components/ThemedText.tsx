import { Text, type TextProps, StyleSheet } from "react-native"
import { colors } from "@/constants/Colors"

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "subtitlelite"
    | "mintext"
}

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "subtitlelite" ? styles.subtitleLite : undefined,
        type === "mintext" ? styles.mintext : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "RalewayRegular",
    fontSize: 16,
    lineHeight: 24,
    color: colors.lightText,
    fontWeight: "400",
  },
  mintext: {
    fontFamily: "RalewayRegular",
    fontSize: 12,
    lineHeight: 14,
    color: colors.lightText,
    fontWeight: "400",
  },
  defaultSemiBold: {
    fontFamily: "Raleway",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: colors.lightText,
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: colors.lightText,
  },
  subtitle: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.lightText,
  },
  subtitleLite: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "200",
    color: colors.lightText,
  },
  link: {
    fontFamily: "Raleway",
    lineHeight: 30,
    fontSize: 16,
    color: colors.lightText,
  },
})
