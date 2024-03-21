import { StatusBar } from "expo-status-bar";
import { ImageBackground, Platform, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import moment from "moment";
import city from "../assets/city-background.jpg";
import { Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Inter_700Bold } from "@expo-google-fonts/inter";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";
import { useEffect } from "react";

const City = ({ route }) => {
  const { weather } = route.params;

  // useEffect(() => console.log(weather), []);

  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground source={city} style={styles.image}>
      <SafeAreaView style={[GlobalStyles.droidSafeArea, styles.container]}>
        <View style={styles.headerBox}>
          <Text style={[styles.london, styles.headingFont]}>
            {weather["city"]["name"]}
          </Text>
          <Text style={[styles.headingFont, styles.uk]}>
            {weather["city"]["country"]}
          </Text>
          <IconText
            iconColor={"red"}
            iconContainer={styles.population}
            iconName={"user"}
            bodyText={weather["city"]["population"]}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.weatherTimeWrapper}>
            <IconText
              iconColor={"white"}
              iconContainer={styles.timer}
              iconName={"sunrise"}
              bodyText={moment(weather["city"]["sunrise"]).format("HH:mm:ss")}
              bodyTextStyle={styles.timeText}
            />
            <IconText
              iconColor={"white"}
              iconContainer={styles.timer}
              iconName={"sunset"}
              bodyText={moment(weather["city"]["sunset"]).format("HH:mm:ss")}
              bodyTextStyle={styles.timeText}
            />
          </View>
        </View>
        <StatusBar style="auto" hidden={false} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
  },
  headerBox: {
    flex: 1,
    alignItems: "center",
    height: "50%",
    // borderColor: "white",
    // borderStyle: "dashed",
    // borderWidth: 2,
    // justifyContent: "center",
  },
  london: {
    fontSize: 40,
  },
  uk: {
    fontSize: 30,
  },
  headingFont: {
    marginTop: 12,
    color: "white",
    fontWeight: "bold",
  },
  population: {
    marginTop: 35,
    flexDirection: "row",
    gap: 15,
  },
  populationText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
  user: {},
  bottomBox: {
    flex: 3,
    // borderColor: "white",
    // borderStyle: "dashed",
    // borderWidth: 2,
  },
  weatherTimeWrapper: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    padding: 10,
    // borderColor: "blue",
    // borderStyle: "dashed",
    // borderWidth: 2,
    alignItems: "center",
  },
  timer: {
    flexDirection: "row",
    gap: 10,
  },
  timeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 50,
  },
});

export default City;
