import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const OnboardScreen = ({ navigation }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Selamat Datang di ScholarSeek",
            description: "Kami membantu kamu menemukan beasiswa terbaik untuk mendukung pendidikanmu.",
            image: require('../assets/Slide1.png')
        },
        {
            title: "Jelajahi Beasiswa",
            description: "Temukan beasiswa yang sesuai dengan kriteria dan minatmu.",
            image: require('../assets/Slide2.png')
        },
        {
            title: "Simpan dan Favoritkan",
            description: "Simpan informasi beasiswa yang kamu suka ke dalam daftar favoritmu.",
            image: require('../assets/Slide3.png')
        },
        {
            title: "Bergabung Sekarang",
            description: "",
            image: require('../assets/Slide4.png')
        },
    ];

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
                onScroll={(event) => {
                    const contentOffsetX = event.nativeEvent.contentOffset.x;
                    const slideIndex = Math.floor(contentOffsetX / event.nativeEvent.layoutMeasurement.width);
                    setCurrentSlide(slideIndex);
                }}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={[styles.slide, { width: screenWidth }]}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.title}>{slide.title}</Text>
                        {slide.description ? (
                            <Text style={styles.description}>{slide.description}</Text>
                        ) : null}
                        {currentSlide === slides.length - 1 && index === slides.length - 1 && (
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleSignup}>
                                    <Text style={styles.buttonText}>Signup</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    button: {
        backgroundColor: '#24A0ED',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,
    },
    signupButton: {
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default OnboardScreen