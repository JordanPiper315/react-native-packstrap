import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderTrip = ({ trip }) => {
  if (trip) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={trip.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {trip.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{trip.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderTrip;
