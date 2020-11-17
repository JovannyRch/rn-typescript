import React from "react";
import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  View,
  ViewProps,
} from "react-native";

interface Props {
  children?: React.ReactNode;
  style?: StyleSheetProperties;
}

const Card = ({ children, style }: Props) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
