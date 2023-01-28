import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { useState } from "react";

const backgroundImage = require("../assets/images/welcomeImage.jpg");

const WelcomeScreen = () => {
  const [showButton, setShowButton] = useState(true);
  const [backgroundImageChange, setBackgroundImageChange] = useState(false);

  const handleWelcome = () => {
    showButton(!setShowButton);
    {
      /* when clicked steps:
      animate backgrond image to bounce up or fade
      reveals 2 new buttons - login sign up
      with 2 fields username and password
  */
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageStyle}
      >
        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Welcome"
            style={styles.button}
            onPress={() => {
              console.log("Button Pressed");
            }}
          >
            <Text style={{ alignSelf: "center" }}>Welcome</Text>
          </TouchableOpacity>
        </View>
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
    zIndex: 2,
  },
  button: {
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 5,
    width: 200,
    height: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    zIndex: 3,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default WelcomeScreen;
