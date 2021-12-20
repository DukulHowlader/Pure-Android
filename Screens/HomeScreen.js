import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import { userContext } from '../App';
import Swiper from 'react-native-swiper';
import { useTheme } from '@react-navigation/native';
import ProductShow from '../Components/ProductShow/ProductShow';


export default function HomeScreen({ navigation }) {
    const [loggedInUser, setLoggedIn]  = useContext(userContext)
    const [categories, setCategories] = useState([]);
    const middleIndex = Math.ceil(categories.length / 2);

    const firstHalf = categories.splice(0, middleIndex);
    const secondHalf = categories.splice(-middleIndex);
    const theme = useTheme();
    const {colors} = useTheme();

    useEffect(() => {
        fetch('http://192.168.100.167:5000/categories')
            .then(response => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [categories]);


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <View style={styles.sliderContainer}>
                <Swiper horizontal={false} height={200} autoplay={true} activeDotColor="#71ba58">
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
            <View style={{marginTop:20,marginHorizontal:20, borderBottomWidth:2, borderBottomColor:'#71ba58'}}>
                <Text style={{color:colors.text, fontWeight:'bold', fontSize:20}}>Categories</Text>
            </View>
            <View style={styles.categoryContainer}>
                {
                    firstHalf?.map((category) => (
                        <TouchableOpacity key={category._id} style={styles.categoryBtn} onPress={() => {
                            navigation.navigate('SubCategoryScreen',{
                                id:category._id,
                                title: category.category,
                            })
                         }}>
                            <View style={styles.categoryIcon}>
                                <Text style={styles.categoryBtnTxt}>{category.category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={styles.categoryContainer}>
                {
                    secondHalf?.map((category) => (
                        <TouchableOpacity key={category._id} style={styles.categoryBtn} onPress={() => {
                            navigation.navigate('SubCategoryScreen',{
                                id: category._id,
                                title: category.category,
                            })
                         }}>
                            <View style={styles.categoryIcon}>
                                <Text style={styles.categoryBtnTxt}>{category.category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <ProductShow navigation = {navigation}/>
        </ScrollView>
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
    }, 
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 60,
        padding:10,
        backgroundColor: '#71ba58',
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#ffffff',
    },

})
