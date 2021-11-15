import React from "react";
import { Text, View, Image } from 'react-native'
import HomeStackScreen from "../StackNavigator/HomeStackScreen";
import AboutStackScreen from "../StackNavigator/AboutStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../../Screens/LoginScreen";
import tabStyle from './tabStyle';
import ContactStackScreen from "../StackNavigator/ContactStackScreen";


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <>
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...tabStyle.shadow
                }

            }}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#71ba58' : '#748c94'
                            }}
                        >

                        </Image>
                        <Text style={{ color: focused ? '#71ba58' : '#748c94', fontSize: 12 }}>Home</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="AboutStack" component={AboutStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../../icons/about-us.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#71ba58' : '#748c94'
                                }}
                            >

                            </Image>
                            <Text style={{ color: focused ? '#71ba58' : '#748c94', fontSize: 12 }}>About Us</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="ContactStack" component={ContactStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../../icons/contact.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#71ba58' : '#748c94'
                                }}
                            >

                            </Image>
                            <Text style={{ color: focused ? '#71ba58' : '#748c94', fontSize: 12 }}>Contact Us</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Login" component={LoginScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../../icons/login.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#71ba58' : '#748c94'
                                }}
                            >

                            </Image>
                            <Text style={{ color: focused ? '#71ba58' : '#748c94', fontSize: 12 }}>Login/Reg</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
        </>
    );
}
export default Tabs;