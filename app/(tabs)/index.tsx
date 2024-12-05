import { View, StatusBar, GestureResponderEvent, Image } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { stylesStartPage as styles } from "@/entities/SartPage/styles.startpage"
import { useAtom } from "jotai"
import {
  mapResByUserAtom,
  mapResponseAtom,
  userAtom,
} from "@/store/store.state"
import allGetSets from "@/entities/allset/api/api.getAllset"
import getOneSetsByUser from "@/entities/allset/api/api.getSetByUser"
import { useEffect } from "react"
import MenuStartPage from "@/entities/SartPage/menu.startPage"

export default function StartPage() {
  const [atomUserState] = useAtom(userAtom)
  const [_atomAllSetState, setAtomMapResState] = useAtom(mapResponseAtom)
  const [_atomUserSetState, setAtomMapResUserState] = useAtom(mapResByUserAtom)

  async function getAllSets() {
    const data = await allGetSets()
    if (typeof data !== "string") setAtomMapResState(data)
  }
  async function getAllSetsByUserId(login: string | null) {
    if (login !== null) {
      const data = await getOneSetsByUser(login)
      if (typeof data !== "string") setAtomMapResUserState(data)
    }
  }

  useEffect(() => {
    getAllSets()
    getAllSetsByUserId(atomUserState.login)
  }, [atomUserState.login])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MenuStartPage />
      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
          resizeMode="contain"
        />
      </View>
      <ThemedText type="subtitle" style={styles.contentTextTitle}>
        ЗАПИСИ ПРО ВАШІ РИБАЛКИ
      </ThemedText>
      <ThemedText type="subtitle">ПРАВИЛА КОРИСТУВАННЯ:</ThemedText>
      <View style={styles.content}>
        <ThemedText style={styles.contentTitle} type="subtitle">
          Розділ "КАРТА"
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Тут Ви можете скористуватися картою, та позначити місце рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Змістіть або збільшьть карту. Коли на карті з'явиться мітка, натисніть
          на неї.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          У вікні, що з'явилося, заповніть назву та опис рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Також Ви можете оцінити її.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Натисніть "Додати".
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Для того, щоб пидивитися усі мітки що додали усі користувачі,
          натисніть "Показати усі місця".
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Натиснувши на конкретну мітку, можна перейти до детальної інформації
          про це місце.
        </ThemedText>
        <ThemedText style={styles.contentTitle} type="subtitle">
          Розділ "РИБАЛКИ"
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          В цому розділі будуть додаватися усі Ваші рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Ви можете переглянути місце рибалки на карті, або видалити запис.
        </ThemedText>
      </View>
      {/* <View>
        <ThemedText style={styles.contentTextMin} type="mintext">
          інформація у загальному користуванні!
        </ThemedText>
        <ThemedText style={styles.contentTextMin} type="mintext">
          Усі користувачі можуть бачити усі місця!
        </ThemedText>
        <View style={styles.Linkbox}>
          <Link href={`https://victorivanets.github.io/fishapp/`}>
            <ThemedText style={styles.icon} type="default">
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
        // href={"/(load)"}
      >
        <View style={styles.btnitem}>
          <ThemedText style={styles.colorWhite} type="subtitle">
            EXIT
          </ThemedText>
        </View>

        <View style={styles.btnitem}>
          <Ionicons
            style={styles.icon}
            name="exit-outline"
            size={30}
            color={colors.light}
          />
        </View>
      </Pressable> */}
    </View>
  )
}
