import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";

export default function About() {
  return (
    <View>
      <Text style={styles.text}>This is the about page. Hola!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
