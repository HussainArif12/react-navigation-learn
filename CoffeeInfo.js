import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CoffeeList({ route }) {
  const [data, setData] = useState();
  const { id } = route.params;

  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      {data ? (
        <View>
          <Text style={styles.heading}> {data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      ) : (
        <Text>Loading..</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
  },
  description: {
    padding: 30,
  },
});
