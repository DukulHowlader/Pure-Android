import React from 'react';
import { StyleSheet, Image, Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function ContactScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.contactImageContainer}>
                <Image
                    source={require('../icons/contact-book.png')}
                    resizeMode='cover'
                    style={{ height: 200, width: 200 }}
                    imageStyle={{ borderRadius: 15 }}
                />
            </View>
            <View style={styles.formContainer}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.HeadText}>GET IN TOUCH</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row', margin: 15, borderBottomWidth: 1, borderBottomColor: colors.text }}>
                        <Feather
                            name="user"
                            size={20}
                            color='#71ba58'
                        />
                        <TextInput style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: colors.text,
                            marginLeft: 10,
                        }} placeholder="Name"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15, borderBottomWidth: 1, borderBottomColor: colors.text }}>
                        <FontAwesome
                            name="envelope-o"
                            size={20}
                            color='#71ba58'
                        />
                        <TextInput 
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: colors.text,
                            marginLeft: 10,
                        }} placeholder="Email"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:50, marginHorizontal: 15, borderBottomWidth: 1, borderBottomColor: colors.text }}>
                        <Feather
                            name="edit-3"
                            size={20}
                            color='#71ba58'
                        />
                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: colors.text,
                                marginLeft: 10,
                                flex: 1,
                            }} placeholder="Details"
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ padding:10,
            marginTop: -28, alignSelf:'center', 
            backgroundColor:'#71ba58',
            borderRadius:100
            }} onPress={() => alert('Sending')}>
                <View>
                    <Entypo
                        name="paper-plane"
                        size={38}
                        color="#ffffff"
                    />
                </View>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    contactImageContainer: {
        alignSelf: 'center',
        marginTop: '18%'
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#71ba58',
        alignSelf: 'center',
        marginTop: 20,
        width: '90%'
    },
    HeadText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})
