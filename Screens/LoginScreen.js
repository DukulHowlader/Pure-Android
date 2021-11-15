import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome!</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => alert("Login works")}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => alert("Signup works")}
                >
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingTop: 100,
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        color: "#71ba58",
        fontWeight:'bold'
    },
    input: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#71ba58"
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        marginTop: 30
    },
    userBtn: {
        backgroundColor: "#71ba58",
        padding: 12,
        width: "45%",
        borderRadius:5
    },
    btnText: {
        fontSize: 18,
        textAlign: "center",
        color: "#fff"
    }
});
