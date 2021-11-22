import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Image } from 'react-native'
import { userContext } from '../App';
import Swiper from 'react-native-swiper';
import { useTheme } from '@react-navigation/native';


export default function HomeScreen({ navigation }) {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const theme = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar barStyle ={theme.dark? 'light-content' : 'dark-content'}/>
            <View style={styles.sliderContainer}>
                <Swiper autoplay horizontal={false} height={200} activeDotColor="#71ba58">
                    <View style={styles.slide}>
                        <Image
                            source={require('../swiperImages/bamboo-bamboo-whisk-board-bowls.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../swiperImages/cocoa-butter.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../swiperImages/shea-butter-hairthumb1618561070.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    }

})
