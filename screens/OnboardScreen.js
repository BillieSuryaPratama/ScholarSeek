import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Onboarding Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OnboardScreen;