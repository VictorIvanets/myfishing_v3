import { LinearGradient } from "expo-linear-gradient"
import { stylesMapPage as styles } from "../../entities/mapPage/styles.mappage"
import React, { useEffect, useState } from "react"
import MapView, {
  Marker,
  MarkerPressEvent,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps"
import { Pressable, StatusBar, StyleSheet, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import {
  getAllSets,
  MapResponse,
} from "../../entities/mapPage/api/api.getAllsets"
import NewSetMapMarker from "../../entities/mapPage/newSetMarker"
import {
  LOCAL_INIT_LAT,
  LOCAL_INIT_LON,
  LOCAL_LOGIN,
} from "@/constants/constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import OneSetPage from "../../entities/oneSetPage/oneSetPage"
import { colors } from "@/constants/Colors"

interface MarkerProps {
  latitude: number
  latitudeDelta: number
  longitude: number
  longitudeDelta: number
}

export interface SetCoordsProps {
  latitude: number
  longitude: number
}

export default function MapPage() {
  const [customMarker, setCustomeMarker] = useState<MarkerProps | null>()
  const [allSetsMarkers, setAllSetsMarkers] = useState<MapResponse[] | null>()
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()
  const [viewSetMarker, setViewSetMarker] = useState<SetCoordsProps | null>(
    null
  )
  const [viewOneSetById, setViewOneSetById] = useState<number | null>(null)
  const [userLogin, setUserLogin] = useState<string>()
  const [btnViewAll, setBtnViewAll] = useState<boolean>(true)
  const [btnViewOne, setBtnViewOne] = useState<boolean>(false)

  async function localGetUserId() {
    const lat = await AsyncStorage.getItem(LOCAL_INIT_LAT)
    const lon = await AsyncStorage.getItem(LOCAL_INIT_LON)
    lat && setLatitude(+JSON.parse(lat))
    lon && setLongitude(+JSON.parse(lon))
  }

  useEffect(() => {
    localGetUserId()
    localGetUserLogin()
  }, [])

  async function localGetUserLogin() {
    try {
      const login = await AsyncStorage.getItem(LOCAL_LOGIN)
      if (login !== null) {
        setUserLogin(login)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onRegionChange = (region: Region) => {
    setCustomeMarker(region)
  }

  const loadAllSets = async () => {
    const allset = await getAllSets()
    setAllSetsMarkers(allset)
    setCustomeMarker(null)
    setBtnViewAll(false)
    setBtnViewOne(true)
  }

  const returtToMap = async () => {
    setAllSetsMarkers(null)
    setBtnViewAll(true)
    setBtnViewOne(false)
  }

  return (
    <LinearGradient
      colors={[colors.light, "transparent", colors.deepdark]}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      {viewOneSetById ? (
        <OneSetPage
          setViewOneSetById={setViewOneSetById}
          setId={viewOneSetById}
          login={userLogin}
        />
      ) : viewSetMarker ? (
        <NewSetMapMarker
          login={userLogin}
          coords={viewSetMarker}
          setViewSetMarker={setViewSetMarker}
        />
      ) : (
        <>
          <View style={styles.contentbox}>
            {latitude && longitude ? (
              <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.2,
                  longitudeDelta: 0.2,
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
                      onPress={() => {
                        setViewOneSetById(marker.setID)
                      }}
                      coordinate={{
                        latitude: marker.coords[0],
                        longitude: marker.coords[1],
                      }}
                    >
                      {/* <Callout
                  // onPress={() => navigate(`/startpage/set/${marker.setID}`)}
                  >
                    <MapMarker marker={marker} />
                  </Callout> */}
                    </Marker>
                  ))}
                {customMarker && !allSetsMarkers && (
                  <Marker
                    title={"ДОДАТИ МІСЦЕ"}
                    coordinate={customMarker}
                    onPress={(e: MarkerPressEvent) => {
                      setViewSetMarker(e.nativeEvent.coordinate)
                    }}
                  >
                    {/* <Callout
                  onPress={(e: CalloutPressEvent) => {
                    // console.log(e.nativeEvent.coordinate)
                  }}
                >
                  <NewSetMapMarker /> 
                </Callout> */}
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
            <Pressable
              onPress={() => loadAllSets()}
              style={btnViewAll ? styles.button : styles.buttonactyve}
            >
              <ThemedText type={"mintext"} style={styles.colorWhite}>
                ВСІ МІСЦЯ
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => returtToMap()}
              style={btnViewOne ? styles.button : styles.buttonactyve}
            >
              <ThemedText type={"mintext"} style={styles.colorWhite}>
                ВИБІР
              </ThemedText>
            </Pressable>
          </View>
        </>
      )}
    </LinearGradient>
  )
}
