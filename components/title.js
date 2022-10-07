import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
});

export default Title;
