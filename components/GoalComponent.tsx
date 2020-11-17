import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

interface Props {
  text: string;
  onDelete: (data: string) => void;
}

const GoalComponent = ({ text, onDelete }: Props) => {
  return (
    <TouchableHighlight onPress={() => onDelete(text)}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
  },
});

export default GoalComponent;
