import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../../Screens/ContactScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';

const ContactStack = createNativeStackNavigator();

export default function ContactStackScreen({navigation}) {
    return (
        <ContactStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#71ba58',
                fontWeight:'bold'
            },
            headerTintColor:'#ffff',
            headerTitleShown: false
        }}>
            <ContactStack.Screen name="Contact" component={ContactScreen} 
            options={{
                headerRight: () => 
                <Icon.Button name="ios-menu" size={25} backgroundColor='#71ba58' onPress={() => navigation.openDrawer()}></Icon.Button>
            }}/>
        </ContactStack.Navigator>
    )
}

const styles = StyleSheet.create({})