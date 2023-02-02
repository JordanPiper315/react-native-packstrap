import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { FlatList, StyleSheet, Platform, View } from "react-native";
import { Avatar, ListItem, Image, Text, Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import TripsInfoScreen from "./TripsInfoScreen";
import TripsScreen from "./TripsScreen";
import { TRIPS } from "../shared/trips";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#6fcaba" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

const TripsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Trips" screenOptions={screenOptions}>
      <Stack.Screen
        name="Trips"
        component={TripsScreen}
        options={{ title: "Trips Directory" }}
      />
      <Stack.Screen
        name="TripInfo"
        component={TripsInfoScreen}
        options={({ route }) => ({ title: route.params.trip.id })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#00AEAE" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Trips"
          component={TripsNavigator}
          options={{ title: "Trips" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
