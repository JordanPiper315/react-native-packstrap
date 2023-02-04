import React from "react";
import { Text, FlatList, StyleSheet, ScrollView, View } from "react-native";
import { GEAR } from "../shared/gearList";
import { Button, Card, ListItem } from "react-native-elements";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const GearScreen = () => {
  return (
    <View>
      <View style={styles.gearCardsContainer}>
        <Card style={styles.gearCards}>
          <Card.Image source={require("../assets/images/camping_gear.png")} />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Make a Gear List"
          />
        </Card>
        <Card style={styles.gearCards}>
          <Card.Image source={require("../assets/images/camping_gear.png")} />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="View Gear Lists"
          />
        </Card>
      </View>
      <Text style={{ fontSize: 30 }}>Gear List</Text>
      <View>
        <FlatList
          data={GEAR}
          renderItem={({ item }) => (
            <Item title={`${item.name}: ${item.brand}`} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gearCards: {
    alignContent: "stretch",
  },
  gearCardsContainer: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 3,
    backgroundColor: "#008080",
    padding: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default GearScreen;
