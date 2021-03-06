import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

interface Props {
  title: string;
}

const HeadMathGame = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HeadMathGame;
