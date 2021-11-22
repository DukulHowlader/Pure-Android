import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../../Screens/ContactScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';


const ContactStack = createNativeStackNavigator();

export default function ContactStackScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <ContactStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.background,
                fontWeight: 'bold',
            },
            headerShadowVisible: false,
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ContactStack.Screen name="Contact" component={ContactScreen}
                options={{
                    title: 'PURE CARE BD',
                    headerLeft: () => (
                        <View >
                            <Icon.Button name="ios-menu" size={25} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginStart: 30 }}>
                            <Icon.Button name="ios-search" size={22} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button>
                            <Icon.Button name="ios-cart" size={22} color={colors.text} backgroundColor={colors.background} onPress={() => alert('Cart Button Clicked!')}></Icon.Button>
                        </View>)
                }}
            />
        </ContactStack.Navigator>
    )
}

const styles = StyleSheet.create({})