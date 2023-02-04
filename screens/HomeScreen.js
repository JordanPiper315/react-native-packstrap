import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Button, Card, Icon, ListItem } from "react-native-elements";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { baseUrl } from "../shared/baseUrl";
import TripsScreen from "./TripsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import GearScreen from "./GearScreen";
import FriendsScreen from "./FriendsScreen";
import CalendarScreen from "./CalendarScreen";
import TrainingScreen from "./TrainingScreen";

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
const Stack = createStackNavigator();

const myStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trips" component={TripsScreen} />
      <Stack.Screen name="Gear" component={GearScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Training" component={TrainingScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  const cards = HOMEPAGECARDS;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Card>
        <Card.Title style={styles.cardTitle}>See Trips</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/images/trips_globe.png")} />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Trips"
          onPress={() => navigation.navigate("Trips")}
        />
      </Card>
      <Card>
        <Card.Title style={styles.cardTitle}>See Gear</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/images/camping_gear.png")} />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Gear"
          onPress={() => navigation.navigate("Gear")}
        />
      </Card>
      <Card>
        <Card.Title style={styles.cardTitle}>See Friends</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/images/friends.png")} />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Friends"
          onPress={() => navigation.navigate("Friends")}
        />
      </Card>
      <Card>
        <Card.Title style={styles.cardTitle}>See Calendar</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/images/calendar.png")} />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Calendar"
          onPress={() => navigation.navigate("Calendar")}
        />
      </Card>
      <Card>
        <Card.Title style={styles.cardTitle}>See Training</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/images/training.png")} />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Training"
          onPress={() => navigation.navigate("Training")}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 24,
  },
  container: {
    //justifyContent: "center",
    //alignItems: "center",
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
