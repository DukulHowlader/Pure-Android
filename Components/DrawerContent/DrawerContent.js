import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableOpacity,
    Switch,
    Paragraph,
    TouchableRipple
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../AuthContext/AuthContext';
import { userContext } from '../../App';

export default function DrawerContent(props) {
    const { toggleTheme } = useContext(AuthContext);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const paperTheme = useTheme();

    const logOutHandle = async () => {
        try {
            await AsyncStorage.removeItem('key');
            setLoggedInUser(null);
            props.navigation.navigate('HomeStack')
        }
        catch (exception) {
            console.log(exception)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: '../../icons/logo.jpg'
                                }}
                                size={50} />

                            <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                                <Title style={{fontSize:16}}>
                                    {loggedInUser ? loggedInUser.CustomerName : 'Not logged in'}
                                </Title>
                                <Caption>
                                    {loggedInUser ? loggedInUser.CustomerEmail : 'null'}
                                </Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('HomeStack') }}
                        />
                        {
                            loggedInUser ? <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => { props.navigation.navigate('ProfileStackScreen') }}
                            /> : null
                        }
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cart-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Cart Item (s)"
                            onPress={() => { props.navigation.navigate('CartViewScreen')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-group-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About Us"
                            onPress={() => { props.navigation.navigate('AboutStack') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="contacts-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contact Us"
                            onPress={() => { props.navigation.navigate('ContactStack') }}
                        />


                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={logOutHandle}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 15,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

})
