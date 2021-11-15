import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './TabNavigators/Tabs';
import DrawerContent from '../Components/DrawerContent/DrawerContent'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>} >
            <Drawer.Screen name="HomeDrawer" component={Tabs} />
            
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
