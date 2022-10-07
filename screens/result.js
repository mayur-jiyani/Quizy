import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>RESULT</Text>
        <Text style={styles.scoreValue}>{score}</Text>
      </View>
      <View>
        <Image
          source={require("../assets/Winners.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    alignItems: "center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    backgroundColor: "#435BF3",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    maxWidth: "70%",
    marginBottom: 30,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});

export default Result;
