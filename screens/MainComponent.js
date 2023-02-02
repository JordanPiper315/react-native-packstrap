import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import TripsInfoScreen from "./TripsInfoScreen";
import TripsScreen from "./TripsScreen";
import { TRIPS } from "../shared/trips";
import HomeScreen from "./HomeScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import CalendarScreen from "../screens/CalendarScreen";
import FriendsScreen from "../screens/FriendsScreen";
import GearScreen from "../screens/GearScreen";
import TrainingScreen from "../screens/TrainingScreen";
import backpack_logo from "../assets/images/backpack_logo.png";

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
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const GearNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Gear"
        component={GearScreen}
        options={({ navigation }) => ({
          title: "Gear",
          headerLeft: () => (
            <Icon
              name="gear"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const TripsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Trips"
        component={TripsScreen}
        options={({ navigation }) => ({
          title: "Trips",
          headerLeft: () => (
            <Icon
              name="map"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FriendsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
        options={({ navigation }) => ({
          title: "Friends",
          headerLeft: () => (
            <Icon
              name="user"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const CalendarNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={({ navigation }) => ({
          title: "Calendar",
          headerLeft: () => (
            <Icon
              name="calendar"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const TrainingNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Training"
        component={TrainingScreen}
        options={({ navigation }) => ({
          title: "Training",
          headerLeft: () => (
            <Icon
              name="calendar"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image source={backpack_logo} style={styles.drawerImage} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeaderText}>PackStrap</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
  </DrawerContentScrollView>
);

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
        drawerContent={CustomDrawerContent}
        drawerStyle={{ backgroundColor: "#00AEAE" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon
                name="home"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Gear"
          component={GearNavigator}
          options={{
            title: "Gear",
            drawerIcon: ({ color }) => (
              <Icon
                name="gear"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Trips"
          component={TripsNavigator}
          options={{
            title: "Trips",
            drawerIcon: ({ color }) => (
              <Icon
                name="map"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Friends"
          component={FriendsNavigator}
          options={{
            title: "Friends",
            drawerIcon: ({ color }) => (
              <Icon
                name="user"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Calendar"
          component={CalendarNavigator}
          options={{
            title: "Calendar",
            drawerIcon: ({ color }) => (
              <Icon
                name="calendar"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Training"
          component={TrainingNavigator}
          options={{
            title: "Training",
            drawerIcon: ({ color }) => (
              <Icon
                name="anchor"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#3EB489",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
