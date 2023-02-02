import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { FlatList, StyleSheet, Platform, View } from "react-native";
import { Avatar, ListItem, Image, Text } from "react-native-elements";
import DirectoryScreen from "./DirectoryScreen";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Constants } from "expo-constants";
import TripsInfoScreen from "./TripsInfoScreen";
import TripsScreen from "./TripsScreen";
import { TRIPS } from "../shared/trips";

const Main = () => {
  const [cards, setCards] = useState(HOMEPAGECARDS);
  const [trips, setTrips] = useState(TRIPS);
  const [selectedTripId, setSelectedTripId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <TripsScreen
        trips={trips}
        onPress={(tripsId) => setSelectedTripId(tripsId)}
      />
      <TripsInfoScreen
        trip={trips.filter((trip) => trip.id === selectedTripId)[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
