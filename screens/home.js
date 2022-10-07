import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Title from "../components/title";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                    source={require("../assets/Illustrations.png")}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    banner: {
        height: 300,
        width: 300,
    },
    button: {
        width: '100%',
        backgroundColor: '#435BF3',
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    },
});

export default Home;


