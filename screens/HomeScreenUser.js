import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreenUser  = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen User</Text>
            <Text style={styles.description}>Selamat datang di halaman utama pengguna!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5', // Warna latar belakang
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default HomeScreenUser ;