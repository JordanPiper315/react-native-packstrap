import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Card, ListItem } from "react-native-elements";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { baseUrl } from "../shared/baseUrl";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  const cards = HOMEPAGECARDS;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <FlatList
        style={styles.cards}
        data={cards}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.image}
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: "#d34567",
                margin: 8,
              }}
            />
            <Item title={item.name} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: 40,
    justifyAlign: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#008080",
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
