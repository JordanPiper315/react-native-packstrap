import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { ImageBackground, StyleSheet, View, Animated } from "react-native";
import { Button, Text } from "react-native-elements";
import { useState } from "react";
import LoginScreen from "./LoginScreen";

const backgroundImage = require("../assets/images/welcomeImage.jpg");

const WelcomeScreen = ({ navigation }) => {
  const [showButton, setShowButton] = useState(true);
  const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(1);
  const backgroundOpacity = useRef(new Animated.Value(1)).current;

  const opacityTiming = Animated.timing(backgroundOpacity, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  });

  const opacity = backgroundOpacity.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  const handleWelcome = () => {
    return (
      <View>
        <Button
          title={"React Native Elements"}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <LoginScreen style={{ zIndex: 3 }} />
        {console.log("blue")}
      </View>
    );
    {
      /* when clicked steps:
      animate backgrond image fade
      reveals 2 new buttons - login sign up
      with 2 fields username and password
  */
    }
  };

  return (
    <Animated.View
      style={
        { opacity: opacity, flex: 1, flexDirection: "row" } /*styles.container*/
      }
    >
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageStyle}
      >
        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          {showButton ? (
            <Button
              title="Welcome"
              buttonStyle={{
                backgroundColor: "rgba(111, 202, 186, 1)",
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => {
                setShowButton(!showButton);
                handleWelcome();
                opacityTiming.start();
                navigation.navigate("Login");
              }}
            >
              <Text style={{ alignSelf: "center" }}>Welcome</Text>
            </Button>
          ) : null}
        </View>
      </ImageBackground>
    </Animated.View>
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
  buttonContainer: {
    position: "absolute",
    bottom: 100,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default WelcomeScreen;
