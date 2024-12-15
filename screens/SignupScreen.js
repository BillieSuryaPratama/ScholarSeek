import { View, Text, TouchableOpacity, TextInput, Button, Touchable } from "react-native";
import React, { UseState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Login ({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, Email, Password)
            if (user) {
                navigation.navigate('contoh');
            }
        }
        catch (error) {
            console.log(error);
            alert('Error')
        }
    }

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Text>Login</Text>
            <TextInput
                placeholder="Username"
                value={Username}
                onChangeText={setUsername}
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                }}
            />
            <TextInput
                placeholder="Email"
                value={Email}
                onChangeText={setEmail}
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                }}
            />
            <TextInput
                placeholder="Password"
                value={Password}
                onChangeText={setPassword}
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                }}
                secureTextEntry
            />
            <TextInput
                placeholder="Confirm Password"
                value={ConfirmPassword}
                onChangeText={setConfirmPassword}
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                }}
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