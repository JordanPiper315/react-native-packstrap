import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderTrip = ({ trip }) => {
  if (trip) {
    return (
      <Card style={styles.cardContainer}>
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
        <View>
          <Icon
            name="camera-retro"
            type="font-awesome"
            color="#f50"
            raised
            reverse
          />
          <Icon name="car" type="font-awesome" color="#f50" raised reverse />
        </View>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
});

export default RenderTrip;
