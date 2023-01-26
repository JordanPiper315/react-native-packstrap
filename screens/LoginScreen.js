import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import styles from "../styles";

export default LoginScreen = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/hiking.jpg")}
        width={width}
        height={height}
        preserveAspectRation="xMidyMid slice"
      />
    </View>
  );
};
