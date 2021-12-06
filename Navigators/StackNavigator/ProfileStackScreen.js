import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../../Screens/ProfileScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import EditProfileScreen from '../../Screens/EditProfileScreen';
import { useTheme } from '@react-navigation/native';
import ProductDetailsScreen from '../../Screens/ProductDetailsScreen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.background,
                fontWeight: 'bold',
            },
            headerShadowVisible: false,
            headerTintColor: colors.text,
        }}>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    title: "",
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor={colors.background} color={colors.text} onPress={() => navigation.openDrawer()}></Icon.Button>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons.Button name="account-edit" size={25} backgroundColor={colors.background} color={colors.text} onPress={() => navigation.navigate("EditProfileScreen")}></MaterialCommunityIcons.Button>
                    ),

                }} />

            <ProfileStack.Screen name="EditProfileScreen" component={EditProfileScreen}
                options={{
                    title: "Edit Profile",
                    headerTitleStyle: {
                        color: colors.text,
                    }
                }} />
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})