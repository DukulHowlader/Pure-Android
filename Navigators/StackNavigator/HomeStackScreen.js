import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';
const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen({navigation}) {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#71ba58',
                fontWeight:'bold'
            },
            headerTintColor:'#ffff',
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}
            options={{
                headerRight: () => 
                <Icon.Button name="ios-menu" size={25} backgroundColor='#71ba58' onPress={() => navigation.openDrawer()}></Icon.Button>
            }}
            />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
