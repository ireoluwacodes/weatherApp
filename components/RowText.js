import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
  const {
    containerStyles,
    messageOneStyles,
    message1,
    messageTwoStyles,
    message2,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={[styles.mediumText, messageOneStyles]}>{message1}</Text>
      <Text style={messageTwoStyles}>{message2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
});

export default RowText;
