import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
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
            alert('Error: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
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
            <TouchableOpacity
                style={styles.Button}
                onPress={handleLogin}
            >
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Belum memiliki akun?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupLink}> Signup</Text>
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
    loginText: {
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
    signupContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    signupText: {
    },
    signupLink: {
        color: '#24A0ED',
        fontWeight: 'bold',
    }
});