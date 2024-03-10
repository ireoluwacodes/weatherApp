import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    droidSafeArea : {
        paddingTop : Platform.OS === 'android' ? 38 : 0
    }
})