import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native is absolute garbage</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to Coffee list"
        onPress={() => navigation.navigate("CoffeeList")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005782",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
