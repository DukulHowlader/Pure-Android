import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import Footer from '../Components/Footer/Footer';

const SubCategoryScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    const [subCategory, setSubCategory] = useState([]);
    const { id } = route.params;
    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/categories/${id}`)
            .then(response => response.json())
            .then((data) => {
                setSubCategory(data[0]);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [id]);
    console.log(subCategory)

    return (
        <SafeAreaView style={[styles.categoryBtn, { flex: 1, marginTop: 10 }]}>

            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <ImageBackground style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#00ff001C',

            }} source={require('../icons/facial-treatment.png')}
                resizeMode='contain'>
                {
                    subCategory?.subCategories?.map((subCate, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ marginVertical: 10 }} onPress={() => {
                                navigation.navigate('ProductsScreen', {
                                    title: subCate,
                                    subName: subCate,
                                })
                            }}>

                                <View style={styles.categoryIcon}>

                                    <Text style={styles.categoryBtnTxt}>{subCate}</Text>

                                </View>

                            </TouchableOpacity>


                        )
                    }

                    )
                }
            </ImageBackground>
            <Footer/>
        </SafeAreaView >


    );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({
    categoryBtn: {
        flex: 1,
    },
    categoryIcon: {
        borderWidth: 3,
        borderColor: '#71ba58',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 300,
        height: 100,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold'
    },

})