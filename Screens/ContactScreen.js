import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import TopBar from '../Components/HomeTop/TopBar'

export default function ContactScreen({navigation}) {
    return (
        <View>
            <TopBar/>
            <Text>Contact</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
