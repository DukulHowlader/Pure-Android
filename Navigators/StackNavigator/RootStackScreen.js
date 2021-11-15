import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../Screens/SplashScreen';
import SignInScreen from '../../Screens/SignInScreen';
import SignUpScreen from '../../Screens/SignUpScreen';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => {
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SingInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
};

export default RootStackScreen;