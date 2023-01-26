import { useState } from "react";
import { HOMEPAGECARDS } from "../shared/homepagecards";
import { FlatList } from "react-native";
import { Avatar, ListItem, Image } from "react-native-elements";
import DirectoryScreen from "./DirectoryScreen";
import LoginScreen from "./LoginScreen";
import { View } from "react-native-animatable";

const Main = () => {
  const [cards, setCards] = useState(HOMEPAGECARDS);

  return (
    <View>
      <Image source={require("../assets/images/hiking.jpg")} />
    </View>
  );

  {
    /* <DirectoryScreen cards={cards} /> */
  }
};

export default Main;
