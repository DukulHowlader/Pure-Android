import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryList from '../Components/HomeTop/CategoryList'
import TopBar from '../Components/HomeTop/TopBar'

export default function AboutScreen() {
    return (
        <ScrollView style={{ marginHorizontal: 20,}}>
            <TopBar/>
            <CategoryList/>
            <Text>About</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
