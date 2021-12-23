import React, { useContext, useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';

const OrderSuccess = ({navigation}) => {
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#71ba58" barStyle='light-content' />
            <View style={styles.header}>
                <Feather
                    name="check-circle"
                    color="#ffffff"
                    size={40}
                />
                <Text style={styles.text_header}>
                    Order successful !
                </Text>
            </View>
            <Animatable.View style={[styles.footer, {
                backgroundColor: colors.background
            }]} animation="fadeInUpBig">
                <Text style={{ fontSize: 20, color: '#71ba58' }}>Thank you for ordering.</Text>
                <TouchableOpacity style={{
                    backgroundColor: '#71ba58',
                    padding: 8,
                    borderRadius: 7,
                    marginTop: 10
                }}
                 onPress ={() => navigation.navigate('HomeScreen')}
                >
                    <View style={{
                        flexDirection:'row', justifyContent:'center', alignItems:'center'
                    }}>
                        <Text style={{ color: '#ffffff' }}>Continue shopping</Text>
                        <Feather
                            name="arrow-right"
                            color="#ffffff"
                        />
                    </View>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}



export default OrderSuccess;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71ba58',
    },
    header: {
        flex: 1.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'center'
    },
    footer: {
        flex: 1.5,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

})
