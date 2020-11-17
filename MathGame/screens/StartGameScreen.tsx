import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";
import Card from "./Card";

interface Props {}

const StartGameScreen = ({}: Props) => {
  const handleClick = () => {};

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card>
        <Text>Select a number</Text>
        <TextInput placeholder="Input a number" style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={colors.accent} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={colors.main} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    borderColor: "white",
    borderBottomColor: "#eee",
    borderWidth: 2,
    width: 100,
    marginBottom: 20,
  },
  button: {
    width: "40%",
  },
});
