import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';


const CategoryScreen = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://immense-cliffs-46216.herokuapp.com/categories')
            .then(response => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const renderItem = ({item, index}) => {
        <View>
            <Text>{item.category}</Text>
        </View>
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <FlatList
                data={categories}
                renderItem = {(item, index) => renderItem(item, index)}
                keyExtractor = {(item,index) => index.toString()}
            />
        </SafeAreaView>
        
    );
};

export default CategoryScreen;