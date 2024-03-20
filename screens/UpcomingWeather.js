import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
} from "react-native";
import weather from "../assets/weather.jpg";
import GlobalStyles from "../config/GlobalStyles";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({route}) => {
  const {weather} = route.params
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <ImageBackground source={weather} style={styles.image}>
        <View style={styles.topSection}>
          <Text style={styles.headerText}>Upcoming Weather</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ListItem
                condition={item.weather[0].main}
                date={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
});

export default UpcomingWeather;

// ScrollView
