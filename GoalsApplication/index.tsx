import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList,
  Modal,
} from "react-native";
import GoalAdd from "./components/GoalAdd";
import GoalComponent from "./components/GoalComponent";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddGoal = (value: string) => {
    setGoals([...goals, value]);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleDelete = (text: string) => {
    setGoals([...goals.filter((item) => item != text)]);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <SafeAreaView>
        <GoalAdd
          visible={showModal}
          onAdd={handleAddGoal}
          onCancel={handleCancel}
        />
        <View style={styles.container}>
          <View>
            <Button title="New Goal" onPress={() => handleShowModal()} />
          </View>
          <View>
            <FlatList
              data={goals}
              keyExtractor={(item, index) => `${index}`}
              renderItem={(item) => (
                <GoalComponent onDelete={handleDelete} text={item.item} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    padding: 50,
  },
  input: {
    borderBottomColor: "black",
  },
  button: {
    width: "80%",
  },
});
