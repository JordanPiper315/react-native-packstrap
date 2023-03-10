import { useState } from "react";
import { TRIPS } from "../shared/trips";
import { FlatList, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import TripsInfoScreen from "./TripsInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";

const TripsScreen = ({ navigation }) => {
  const [trips, setTrips] = useState(TRIPS);

  const renderDirectoryItem = ({ item: trip }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate("TripsInfoScreen", { trip })}
      >
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
      data={trips}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TripsScreen;
