import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../Screens/AboutScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';

const AboutStack = createNativeStackNavigator();

export default function AboutStackScreen({navigation}) {
    return (
        <AboutStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#71ba58',
                fontWeight:'bold'
            },
            headerTintColor:'#ffff',
            headerTitleShown: false
        }}>
            <AboutStack.Screen name="About" component={AboutScreen} 
            options={{
                headerRight: () => 
                <Icon.Button name="ios-menu" size={25} backgroundColor='#71ba58' onPress={() => navigation.openDrawer()}></Icon.Button>
            }}/>
        </AboutStack.Navigator>
    )
}

const styles = StyleSheet.create({})
