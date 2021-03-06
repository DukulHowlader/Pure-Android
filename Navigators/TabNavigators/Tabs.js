import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image } from 'react-native'
import HomeStackScreen from "../StackNavigator/HomeStackScreen";
import AboutStackScreen from "../StackNavigator/AboutStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactStackScreen from "../StackNavigator/ContactStackScreen";
import RootStackScreen from "../StackNavigator/RootStackScreen";
import { userContext } from "../../App";
import ProfileStackScreen from "../StackNavigator/ProfileStackScreen";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <>
            <Tab.Navigator
                activeColor="#fff"
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        bottom: 5
                    },
                }}>
                <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
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
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 2, }}>
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
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
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
                {loggedInUser?._id ?
                    <Tab.Screen name="ProfileStack" component={ProfileStackScreen}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
                                    <Image
                                        source={require('../../icons/user.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: focused ? '#71ba58' : '#748c94'
                                        }}
                                    >

                                    </Image>
                                    <Text style={{ color: focused ? '#71ba58' : '#748c94', fontSize: 12 }}>Profile</Text>
                                </View>
                            ),
                        }}
                    />
                    :
                    <Tab.Screen name="RootStack" component={RootStackScreen}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}>
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
                    />}
            </Tab.Navigator>
        </>
    );
}
export default Tabs;