import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeadMathGame from "./component/HeadMathGame";
import StartGameScreen from "./screens/StartGameScreen";

const MathGame = () => {
  return (
    <View style={styles.screen}>
      <HeadMathGame title={"Guess a Number"} />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MathGame;
