import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../config/GlobalStyles";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ route }) => {
  const { weather } = route.params;
  const item = weather["list"][0];

  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <View style={styles.topSection}>
        <Feather
          name={weatherType[item["weather"][0]["main"]].icon}
          size={150}
          color="black"
        />
        <Text style={styles.temperatureText}>{item["main"]["temp"]}</Text>
        <RowText
          containerStyles={styles.rowContainer}
          message1={`Feels like ${item["main"]["feels_like"]}`}
          message2={`High: ${item["main"]["temp_max"]}       Low: ${item["main"]["temp_min"]}`}
          messageTwoStyles={styles.temperatureVariationText}
        />
      </View>
      {/* <RowText
        containerStyles={styles.bottomText}
        message1={"Its Sunny"}
        message2={"Its Perfect T-Shirt Weather"}
        messageTwoStyles={styles.typeOfWeatherText}
        messageOneStyles={styles.sunnyText}
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  topSection: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  temperatureText: {
    marginTop: 10,
    fontSize: 80,
    fontWeight: "600",
  },
  feelsLikeTemperature: {
    margin: 10,
    fontSize: 50,
    fontWeight: "500",
  },
  temperatureVariation: {
    flexDirection: "row",
    gap: 15,
  },
  temperatureVariationText: {
    fontSize: 25,
    fontWeight: "400",
  },
  bottomSection: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rowContainer: {
    alignItems: "center",
  },
  bottomText: {},
  sunnyText: {
    padding: 5,
    fontSize: 50,
    fontWeight: "600",
  },
  typeOfWeatherText: {
    padding: 5,
    paddingBottom: 20,
    fontSize: 35,
    fontWeight: "600",
  },
});

export default CurrentWeather;
