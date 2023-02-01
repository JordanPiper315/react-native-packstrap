import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { FlatList, StyleSheet, Platform, View } from "react-native";
import { Avatar, ListItem, Image, Text } from "react-native-elements";
import DirectoryScreen from "./DirectoryScreen";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Constants } from "expo-constants";

const WelcomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: "#5637DD" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Welcome Screen" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login Screen" }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  const [cards, setCards] = useState(HOMEPAGECARDS);

  return (
    <View style={styles.container}>
      <DirectoryScreen cards={cards} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
