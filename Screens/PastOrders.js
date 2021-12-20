import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useTheme } from 'react-native-paper';

const PastOrders = ({navigation}) => {
    const {colors} = useTheme();
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 20, color:colors.text}}>Past Orders</Text>
            <View style={styles.box}>
                <View style={{
                    alignSelf: 'center', borderRightWidth: 2, 
                    borderRightColor: '#71ba58'
                }}>
                    <AntDesign
                        name="profile"
                        size={50}
                        color={colors.text}
                    />
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 5 }}>
                    <Text style={[styles.textSize,{color:colors.text}]}>Beetroot Powder</Text>
                    <Text style={[styles.textSize,{color:colors.text}]}>Rose Powder</Text>
                    <Text style={[styles.textSize,{color:colors.text}]}>Glycerin</Text>
                    <Text style={[styles.textSize,{color:colors.text}]}>Eucalyptus essential oil (4-5ml)</Text>

                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color:colors.text }}>Total: 1200/-</Text>
                    <TouchableOpacity style={{
                        marginTop:10,
                        backgroundColor:'#71ba58',
                        borderRadius:3
                    }}>
                        <Text style={{
                            padding:8, 
                            color:'#ffffff',
                            fontWeight:'bold',
                        }}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default PastOrders;

const styles = StyleSheet.create({
    box: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        height: 130,
        borderWidth: 1,
        borderColor: '#D9FFFF00',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textSize: {
        fontSize: 15,
    }
})