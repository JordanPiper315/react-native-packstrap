import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const CalendarScreen = () => {
  const [date, setDate] = useState(null);
  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={setDate} />
      <View>
        <Text>SELECTED DATE:{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
});
export default CalendarScreen;
