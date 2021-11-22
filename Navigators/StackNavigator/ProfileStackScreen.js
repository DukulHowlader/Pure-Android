import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../../Screens/ProfileScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import EditProfileScreen from '../../Screens/EditProfileScreen';
import { useTheme } from '@react-navigation/native';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen({ navigation }) {
    const {colors} = useTheme();
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:colors.background,
                fontWeight: 'bold',
            },
            headerShadowVisible:false,
            headerTintColor: '#000',
        }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen}
                options={{
                    title: "",
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor={colors.background} color={colors.text} onPress={() => navigation.openDrawer()}></Icon.Button>
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons.Button name="account-edit" size={25} backgroundColor={colors.background} color={colors.text} onPress={() => navigation.navigate("EditProfile")}></MaterialCommunityIcons.Button>
                    ),

                }} />

            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}
                options={{
                    title: "Edit Profile",
                    headerTitleStyle:{
                       color:colors.text, 
                    }
                    

                }} />
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})