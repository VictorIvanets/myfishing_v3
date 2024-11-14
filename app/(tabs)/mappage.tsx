import { LinearGradient } from "expo-linear-gradient"
import { stylesMapPage as styles } from "../../components/mapPage/styles.mappage"
import React, { useEffect, useRef, useState } from "react"
import MapView, {
  Callout,
  CalloutPressEvent,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps"
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useNavigation } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { getAllSets, MapResponse } from "../../components/mapPage/getAllsets"
import MapMarker from "../../components/mapPage/setMarker"
import NewSetMapMarker from "../../components/mapPage/newSetMarker"

interface MarkerProps {
  latitude: number
  latitudeDelta: number
  longitude: number
  longitudeDelta: number
}

export default function MapPage() {
  // const { latitude, longitude } = useSelector((s: RootState) => s.location)
  const [customMarker, setCustomeMarker] = useState<MarkerProps | null>()
  const [allSetsMarkers, setAllSetsMarkers] = useState<MapResponse[] | null>()
  // const navigate = useNavigate()
  // const dispatch = useDispatch<AppDispath>()

  const latitude = 51.0
  const longitude = 28.0

  const calloutPressed = (e: CalloutPressEvent) => {
    console.log(e)
  }

  const onRegionChange = (region: Region) => {
    setCustomeMarker(region)
  }

  const loadAllSets = async () => {
    const allset = await getAllSets()
    setAllSetsMarkers(allset)
    setCustomeMarker(null)
  }

  const returtToMap = async () => {
    setAllSetsMarkers(null)
  }

  return (
    <LinearGradient
      colors={["rgba(0, 98, 128, 0.719)", "transparent", "rgba(0,0,0,0.8)"]}
      style={styles.container}
    >
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.contentbox}>
        {latitude && longitude ? (
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            showsUserLocation
            showsMyLocationButton
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={onRegionChange}
          >
            {allSetsMarkers &&
              allSetsMarkers.map((marker, index) => (
                <Marker
                  key={marker.setID}
                  title={marker.title}
                  coordinate={{
                    latitude: marker.coords[0],
                    longitude: marker.coords[1],
                  }}
                  // onPress={() => onMarkerSelected(marker)}
                >
                  <Callout
                  // onPress={() => navigate(`/startpage/set/${marker.setID}`)}
                  >
                    <MapMarker marker={marker} />
                  </Callout>
                </Marker>
              ))}
            {customMarker && (
              <Marker
                title={"MY LOCATION"}
                coordinate={customMarker}
                // onPress={() => myMarkerSelected(customMarker)}
              >
                <Callout
                  onPress={(e: CalloutPressEvent) => {
                    // dispatch(
                    //   locNewSetActions.setCoordsNewSet(e.nativeEvent.coordinate)
                    // )
                    console.log(e.nativeEvent.coordinate)
                    // navigate(`/startpage/newset`)
                  }}
                >
                  <NewSetMapMarker />
                </Callout>
              </Marker>
            )}
          </MapView>
        ) : (
          <View style={styles.contentbox}>
            <ThemedText type="subtitle" style={{ color: "white" }}>
              НЕ ВСТАНОВЛЕННО КООРДИНАТИ
            </ThemedText>
          </View>
        )}
      </View>
      <View style={styles.buttonbox}>
        <Pressable onPress={() => loadAllSets()} style={styles.button}>
          <ThemedText type={"mintext"} style={styles.colorWhite}>
            ВСІ МІСЦЯ
          </ThemedText>
        </Pressable>
        <Pressable onPress={() => returtToMap()} style={styles.button}>
          <ThemedText type={"mintext"} style={styles.colorWhite}>
            ВИБІР
          </ThemedText>
        </Pressable>
      </View>
    </LinearGradient>
  )
}
