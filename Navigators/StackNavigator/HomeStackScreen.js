import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen({ navigation }) {
    const {colors} = useTheme();
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:colors.background,
                fontWeight: 'bold',
            },
            headerShadowVisible:false,
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={{
                    title: 'PURE CARE BD',
                    headerLeft: () =>(
                            <Icon.Button name="ios-menu" size={25} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button> 
                    ),
                    headerRight: () =>(
                        <View style={{flexDirection:'row', marginStart:30}}>
                            <Icon.Button name="ios-search" size={22} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button>
                            <Icon.Button name="ios-cart" size={22} color={colors.text} backgroundColor={colors.background} onPress={() => alert('Cart Button Clicked!')}></Icon.Button>
                        </View>)
                }}
            />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
