import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { FRIENDS } from "../shared/friendsList";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FriendsScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Friends</Text>
      <FlatList
        data={FRIENDS}
        renderItem={({ item }) => (
          <Item title={`${item.name}`} avatar={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth: 3,
    backgroundColor: "#008080",
    padding: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default FriendsScreen;
