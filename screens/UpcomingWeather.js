import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import weather from "../assets/weather.jpg";
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../config/GlobalStyles";

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <ImageBackground source={weather} style={styles.image}>
        <View style={styles.topSection}>
          <Text style={styles.headerText}>Upcoming Weather</Text>
          <View style={styles.bodySection}>
            <Feather name="sun" size={60} color="white" />
            <Text style={styles.dateText}>2023-2-18</Text>
            <Text style={styles.timeText}>12:00:00</Text>
            <Text style={styles.humidityText}>7.55</Text>
            <Text style={styles.humidityText}>8.55</Text>
          </View>
          <View style={styles.bodySection}>
            <Feather name="sun" size={60} color="white" />
            <Text style={styles.dateText}>2023-2-18</Text>
            <Text style={styles.timeText}>15:00:00</Text>
            <Text style={styles.humidityText}>7.55</Text>
            <Text style={styles.humidityText}>8.55</Text>
          </View>
          <View style={styles.bodySection}>
            <Feather name="sun" size={60} color="white" />
            <Text style={styles.dateText}>2023-2-18</Text>
            <Text style={styles.timeText}>18:00:00</Text>
            <Text style={styles.humidityText}>7.55</Text>
            <Text style={styles.humidityText}>8.55</Text>
          </View>
        </View>
        <View style={styles.bottomSection}></View>
      </ImageBackground>
      <StatusBar style="auto" hidden={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
  },
  topSection: {
    // borderColor: "black",
    // borderWidth: 2,
    // borderStyle: "dashed",
    flex: 3,
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5,
  },
  bodySection: {
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "pink",
    alignItems: "center",
    padding: 20,
    margin: 10,
  },
  dateText: {
    fontSize: 20,
    color: "white",
  },
  timeText: {
    fontSize: 20,
    color: "white",
  },
  humidityText: {
    fontSize: 25,
    color: "white",
  },
  bottomSection: {
    flex: 2,
  },
});

export default UpcomingWeather;
