import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Share, ScrollView } from 'react-native';
import { Avatar, Title, Caption, TouchableRipple, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native';
import { userContext } from '../App';
export default function ProfileScreen() {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const theme = useTheme();
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle ={theme.dark ? 'light-content' : 'dark-content'}/>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://www.w3schools.com/howto/img_avatar.png'
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Title style={[styles.title, { marginTop: 20}]}>{loggedInUser?.CustomerName}</Title>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icons
                        name="map-marker-radius"
                        color="#777777"
                        size={20}
                    />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {loggedInUser?.CustomerAddress}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon
                        name="phone"
                        color="#777777"
                        size={20}
                    />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {loggedInUser?.CustomerContact}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon
                        name="email"
                        color="#777777"
                        size={20}
                    />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {loggedInUser?.CustomerEmail}
                    </Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,{ borderRightColor:'#dddddd', borderRightWidth:2}]}>
                    <Title>120 BDT</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon
                            name="credit-card" color="#71ba58" size={25}
                        />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icons
                            name="share-outline" color="#71ba58" size={25}
                        />
                        <Text style={styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icons
                            name="account-check-outline" color="#71ba58" size={25}
                        />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon
                            name="settings" color="#71ba58" size={25}
                        />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});
