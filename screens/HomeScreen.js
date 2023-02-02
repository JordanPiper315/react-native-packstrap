import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Card } from "react-native-elements";
import { HOMEPAGECARDS } from "../shared/homepagecards";

const RenderCards = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [cards, setCards] = useState(HOMEPAGECARDS);
  console.log(cards);
  const featCards = cards.find((item) => item.name);
  return (
    <ScrollView>
      <Text>Welcome</Text>
      <RenderCards item={featCards} />
    </ScrollView>
  );
};

export default HomeScreen;
