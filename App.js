import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useFonts } from 'expo-font';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Inter_700Bold } from '@expo-google-fonts/inter';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'RobotoBlack' : require("./assets/fonts/Roboto-Black.ttf") 
  // })
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={{
        ...styles.container,
       
      }}
    >
      <Text style={[styles.blue, styles.bigFont, styles.textFont]}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  blue: {
    color: "blue",
  },
  bigFont: {
    // fontFamily : 'RobotoBlack',
    fontSize: 50,
  },
  textFont : {
    fontFamily : 'Inter_700Bold'
  }
});
