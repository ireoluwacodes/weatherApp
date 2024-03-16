import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../config/GlobalStyles";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <View style={styles.topSection}>
        <Feather name="sun" size={150} color="black" />
        <Text style={styles.temperatureText}>6</Text>
        <RowText
          containerStyles={styles.rowContainer}
          message1={'Feels like 9'}
          message2={'High: 13 Low: 5'}
          messageTwoStyles={styles.temperatureVariationText}
        />
        {/* <Text style={styles.feelsLikeTemperature}>Feels like 9</Text>
        <View style={styles.temperatureVariation}>
        <Text style={styles.temperatureVariationText}>High: 13</Text>
        <Text style={styles.temperatureVariationText}>Low: 5</Text>
      </View> */}
      </View>
      <RowText
        containerStyles={styles.bottomText}
        message1={'Its Sunny'}
        message2={'Its Perfect T-Shirt Weather'}
        messageTwoStyles={styles.typeOfWeatherText}
        messageOneStyles={styles.sunnyText}
      />
      {/* <View style={styles.bottomSection}>
        <View style={styles.bottomText}>
          <Text style={styles.sunnyText}>It's Sunny</Text>
          <Text style={styles.typeOfWeatherText}>
            It's Perfect T-Shirt Weather
          </Text>
        </View>
      </View> */}
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
    alignItems: 'center',
  },
  bottomText: {},
  sunnyText: {
    padding: 5,
    fontSize: 50,
    fontWeight: "600",
  },
  typeOfWeatherText: {
    padding: 5,
    paddingBottom : 20,
    fontSize: 35,
    fontWeight: "600",
  },
});

export default CurrentWeather;
