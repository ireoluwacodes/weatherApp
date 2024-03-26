import Error from "./components/Error";
import React from "react";
import Tabs from "./components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGetWeather } from "./hooks/useGetWeather";

export default function App() {
  const [loading, errorMsg, weather] = useGetWeather();
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"orange"} />
      </View>
    );
  } else if (errorMsg) {
    return <Error />;
  } else if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  } else {
    return <Error />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
// npm start --reset-cache
