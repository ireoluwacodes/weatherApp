import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
  const { date, time, min, max, condition } = props;
  return (
    <View style={styles.bodySection}>
      <Feather name={weatherType[condition].icon} size={60} color="white" />
      <View>
        <Text style={styles.dateText}>{moment(date).format('dddd')}</Text>
        <Text style={styles.timeText}>{moment(time).format('h:mm:ss a')}</Text>
      </View>
      <Text style={styles.humidityText}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ListItem;
