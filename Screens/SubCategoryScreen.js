import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';

const SubCategoryScreen = ({ route, navigation }) => {
const {colors} = useTheme();
const theme = useTheme();
    const [subCategory, setSubCategory] = useState();
    const { id } = route.params;
    useEffect(() => {
        fetch(`http://172.16.1.6:5000/categories/${id}`)
            .then(response => response.json())
            .then((data) => {
                setSubCategory(data[0]);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [id]);

    return (
        <SafeAreaView style={{ flex: 1, marginTop:10 }}>
            <StatusBar  barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            {
                subCategory?.subCategories?.map((subCate, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.categoryBtn} onPress={() => {
                            navigation.navigate('ProductsScreen',{
                                title:subCate,
                                subName: subCate,
                            })
                         }}>
                            <View style={[styles.categoryIcon,{backgroundColor:colors.background}]}>
                                <Text style={styles.categoryBtnTxt}>{subCate}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

                )
            }
        </SafeAreaView>

    );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({ 
    categoryBtn: {
        flex: 1,
    },
    categoryIcon: {
        borderWidth: 3,
        borderColor:'#71ba58',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#ffffff' /* '#FF6347' */,
        borderRadius: 10,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        color: '#71ba58',
        fontSize:22,
    },

})