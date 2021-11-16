import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import CategoryList from '../Components/HomeTop/CategoryList';
import TopBar from '../Components/HomeTop/TopBar';
import ProductShow from '../Components/ProductShow/ProductShow';

export default function HomeScreen({navigation}) {
    return (
        <ScrollView style={{ marginHorizontal: 20,}}>
            <TopBar/>
            <CategoryList/>
            <ProductShow/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
