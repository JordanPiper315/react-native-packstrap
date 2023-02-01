import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem, Image, Text } from "react-native-elements";
import DirectoryScreen from "./DirectoryScreen";
import LoginScreen from "./LoginScreen";
import { View } from "react-native-animatable";
import WelcomeScreen from "./WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Main = () => {
  const [cards, setCards] = useState(HOMEPAGECARDS);

  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {console.log(<WelcomeScreen />)}
      {/*<LoginScreen />*/}
      {/* <DirectoryScreen cards={cards} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
