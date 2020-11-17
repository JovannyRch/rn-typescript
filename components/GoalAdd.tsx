import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput, Button } from "react-native";

interface Props {
  visible: boolean;
  onAdd: (value: string) => void;
  onCancel: () => void;
}

const GoalAdd = ({ visible, onAdd, onCancel }: Props) => {
  const [input, setInput] = useState("");

  const [value, setvalue] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <Modal style={styles.modal} visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Add Goal</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              onChangeText={handleChange}
              style={styles.input}
              placeholder={"Course Goal"}
              value={input}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title={"Add"} onPress={() => handleAdd()} />
            <Button title={"Cancel"} color="red" onPress={() => onCancel()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalAdd;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    borderColor: "transparent",
    borderBottomColor: "#eee",
    borderWidth: 3,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldContainer: {
    width: "100%",
  },
});
