import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconColor, iconContainer, iconName, bodyTextStyle, bodyText } = props;
  return (
    <View style={iconContainer}>
      <Feather name={iconName} size={25} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default IconText;
