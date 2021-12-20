import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.footerHead}>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <FontAwesome
                        name="user"
                        size={25}
                        color="#71ba58"
                    />
                    <Text style={styles.footerHeadText}>
                        ABOUT PURE CARE BD
                    </Text>
                </View>
                <Text style={styles.footerText}>
                    Truly wonder of the worlds, where you will get pure, natural and genuine products from every corner of the world available at your doorstep in just a click.
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/purecarebd2')}>
                        <SimpleLineIcons
                            name="social-facebook"
                            size={20}
                            color="#71ba58"
                            style={{ marginHorizontal: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.gmail.com')}>
                        <Ionicons
                            name="mail-outline"
                            size={20}
                            color="#71ba58"
                            style={{ marginHorizontal: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
                        <Ionicons
                            name="ios-logo-instagram"
                            size={20}
                            color="#71ba58"
                            style={{ marginHorizontal: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerHead}>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <FontAwesome5
                        name="map-marked-alt"
                        size={25}
                        color="#71ba58"
                    />
                    <Text style={styles.footerHeadText}>
                        OUR LOCATION
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <FontAwesome5
                        name="map-pin"
                        size={16}
                        color="#71ba58"
                    />
                    <Text style={[styles.footerText, { marginLeft: 10 }]}>
                        West Kafrul, Agargaon, Taltola, Dhaka-1207, Bangladesh
                    </Text>
                </View>
            </View>


            <View style={styles.footerHead}>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <AntDesign
                        name="contacts"
                        size={25}
                        color="#71ba58"
                    />
                    <Text style={styles.footerHeadText}>
                        CONTACT US
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <FontAwesome5
                        name="phone"
                        size={16}
                        color="#71ba58"
                    />
                    <Text style={[styles.footerText, { marginLeft: 10 }]}>
                        +8801846069269
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <FontAwesome5
                        name="envelope"
                        size={16}
                        color="#71ba58"
                    />
                    <Text style={[styles.footerText, { marginLeft: 10 }]}>
                        purecarebd@gmail.com
                    </Text>
                </View>
            </View>

            <View style={styles.footerHead}>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <Ionicons
                        name="information-circle-outline"
                        size={28}
                        color="#71ba58"
                    />
                    <Text style={styles.footerHeadText}>
                        INFORMATION
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <FontAwesome5
                        name="angle-right"
                        size={16}
                        color="#FFD700"
                        style={{marginLeft:20}}
                    />
                    <Text style={[styles.footerText, { marginLeft: 10 }]}>
                        Privacy & Policy
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <FontAwesome5
                        name="angle-right"
                        size={16}
                        color="#FFD700"
                        style={{marginLeft:20}}
                    />
                    <Text style={[styles.footerText, { marginLeft: 10 }]}>
                        Terms & Conditions
                    </Text>
                </View>
            </View>

            <View style={{fontSize:18, fontWeight:'bold', height:60, width:'100%',backgroundColor:'#1F1F1F', justifyContent:'center', alignItems:'center',}}>
                <Text style={styles.footerText}>© Copyright 2017 by Pure Care BD</Text>
            </View>
        </View>
    )
}

export default Footer;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    footerHead: {
        marginHorizontal: 40,
        marginVertical: 20,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1
    },
    footerHeadText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 5
    },
    footerText: {
        color: 'white'
    },
})
