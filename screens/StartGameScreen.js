import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Card from "../Components/Card";

import colour from "../Constants/colour";
import Input from "../Components/Input";
const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            value={enteredValue}
            autoCorret={false}
            onChangeText={(event) => {
              setEnteredValue(event.replace(/[^0-9]/g, ""));
            }}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={colour.secondary}
                title="reset"
                onPress={() => {}}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colour.primary}
                title="confirm"
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
  },
});

export default StartGameScreen;
