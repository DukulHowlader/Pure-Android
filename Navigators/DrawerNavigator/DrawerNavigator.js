import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from '../TabNavigators/Tabs';
import DrawerContent from '../../Components/DrawerContent/DrawerContent';
import ProfileStackScreen from '../StackNavigator/ProfileStackScreen';
import HomeStackScreen from '../StackNavigator/HomeStackScreen';
import CartViewScreen from '../../Screens/CartViewScreen';
import PastOrders from '../../Screens/PastOrders';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        
        <Drawer.Navigator  drawerContent={props => <DrawerContent {... props}/>} >
            <Drawer.Screen name="HomeDrawer" component={Tabs} />
            <Drawer.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
            <Drawer.Screen name="CartView" component={CartViewScreen} />
            <Drawer.Screen name="PastOrder" component={PastOrders} />
        </Drawer.Navigator>
    
    )
}

const styles = StyleSheet.create({})
