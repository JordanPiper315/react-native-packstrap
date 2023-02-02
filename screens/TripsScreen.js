import { useState } from "react";
import TRIPS from "../shared/trips";
import { FlatList, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const TripsScreen = (props) => {
  const renderDirectoryItem = ({ item: trip }) => {
    return (
      <ListItem onPress={() => props.onPress(trip.id)}>
        <Avatar source={trip.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{trip.name}</ListItem.Title>
          <ListItem.Subtitle>{trip.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={props.trips}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TripsScreen;
