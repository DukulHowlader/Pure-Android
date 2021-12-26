import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../Screens/SignInScreen';
import SignUpScreen from '../../Screens/SignUpScreen';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
            <RootStack.Navigator headerMode="none" screenOptions={{
                headerShown: false
            }}>
                <RootStack.Screen name="SingInScreen" component={SignInScreen} />
                <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            </RootStack.Navigator>

    )
};

export default RootStackScreen;