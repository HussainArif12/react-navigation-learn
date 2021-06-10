import { Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

export default function CoffeeList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderItem = ({ item }) => (
    <Text onPress={() => navigation.navigate("CoffeeInfo", { id: item.id })}>
      {item.title}
    </Text>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
}
