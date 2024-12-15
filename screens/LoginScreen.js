import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Login({ navigation }) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, Email, Password);
            if (user) {
                navigation.navigate('Onboard');
            }
        } catch (error) {
            console.log(error);
            alert('Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Signup</Text>
            <TextInput
                placeholder="Email"
                value={Email}
                onChangeText={setEmail}
                style={styles.InputBox}
            />
            <TextInput
                placeholder="Password"
                value={Password}
                onChangeText={setPassword}
                style={styles.InputBox}
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    InputBox: {
        height: 40,
        width: '60%',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});