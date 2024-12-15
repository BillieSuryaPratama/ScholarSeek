import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Signup({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, Email, Password);
            if (user) {
                navigation.navigate('Login');
            }
        } catch (error) {
            console.log(error);
            alert('Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Signup</Text>
            <TextInput
                placeholder="Username"
                value={Username}
                onChangeText={setUsername}
                style={styles.InputBox}
            />
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
            <TextInput
                placeholder="Confirm Password"
                value={ConfirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.InputBox}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.Button}
                onPress={handleSignup}
            >
                <Text style={styles.ButtonText}>Signup</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Sudah memiliki akun?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}> Login</Text>
                </TouchableOpacity>
            </View>

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
    signupText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
    Button: {
        height: 40,
        width: '60%',
        borderRadius: 10,
        backgroundColor: '#24A0ED',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    loginText: {
    },
    loginLink: {
        color: '#24A0ED',
        fontWeight: 'bold',
    }
});