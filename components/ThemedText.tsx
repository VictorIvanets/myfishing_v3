import { Text, type TextProps, StyleSheet } from "react-native"

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
    fontFamily: "Raleway",
    fontSize: 16,
    lineHeight: 24,
    color: "#a5c9d4",
  },
  mintext: {
    fontFamily: "Raleway",
    fontSize: 12,
    lineHeight: 24,
    color: "#a5c9d4",
    fontWeight: "400",
  },
  defaultSemiBold: {
    fontFamily: "Raleway",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: "#a5c9d4",
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#a5c9d4",
  },
  subtitle: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "bold",
    color: "#a5c9d4",
  },
  subtitleLite: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "200",
    color: "#a5c9d4",
  },
  link: {
    fontFamily: "Raleway",
    lineHeight: 30,
    fontSize: 16,
    color: "#a5c9d4",
  },
})
