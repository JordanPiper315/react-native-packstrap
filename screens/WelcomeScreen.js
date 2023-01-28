import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Image, Text } from "react-native-elements";

const backgroundImage = require("../assets/images/welcomeImage.jpg");

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageStyle}
      >
        <StatusBar style="auto" />
        <Button
          title="Welcome"
          style={styles.button}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
            borderRadius: 5,
            width: 200,
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  button: {
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default WelcomeScreen;
