import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import CategoryList from '../Components/HomeTop/CategoryList'
import TopBar from '../Components/HomeTop/TopBar'

export default function ContactScreen({ navigation }) {
    return (
        <ScrollView style={{ marginHorizontal: 20, }}>
            <TopBar />
            <CategoryList />
            <Text>Contact</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
