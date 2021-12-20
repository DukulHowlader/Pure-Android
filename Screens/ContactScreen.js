import React from 'react';
import { StyleSheet,Linking,Image, Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Footer from '../Components/Footer/Footer';

export default function ContactScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.contactImageContainer}>
                    <Image
                        source={require('../icons/contact-book.png')}
                        resizeMode='cover'
                        style={{ height: 150, width: 150 }}
                        imageStyle={{ borderRadius: 15 }}
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.HeadText}>GET IN TOUCH</Text>
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
                        ></TextInput>
                        <View style={{ flexDirection: 'row', margin: 30, borderBottomWidth: 1, borderBottomColor: colors.text }}>
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
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 30, borderBottomWidth: 1, borderBottomColor: colors.text }}>
                            <FontAwesome
                                name="envelope-o"
                                size={20}
                                color='#71ba58'
                            />
                            <TextInput style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: colors.text,
                                marginLeft: 10,
                            }} placeholder="Email"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 80, margin: 30, borderBottomWidth: 1, borderBottomColor: colors.text }}>
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
                                }} placeholder="Details.."
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    padding: 10,
                    marginTop: -28, alignSelf: 'center',
                    backgroundColor: '#71ba58',
                    borderRadius: 100
                }} onPress={() => alert('Sending')}>
                    <View>
                        <Entypo
                            name="paper-plane"
                            size={38}
                            color="#ffffff"
                        />
                    </View>
                </TouchableOpacity>

                <View style={{
                    marginVertical: 50,
                    borderTopColor: '#dddddd',
                    borderTopWidth: 1,
                }}>
                    <View style={{ marginTop: 15, alignSelf: 'center' }}>
                        <Text>FOLLOW US ON</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.gmail.com/')}>
                            <View style={{ marginTop: 15, marginHorizontal: 7 }}>
                                <SimpleLineIcons
                                    name="social-google"
                                    size={30}
                                    color='#71ba58'
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/purecarebd2')}>
                            <View style={{ marginTop: 15, marginHorizontal: 7 }}>
                                <SimpleLineIcons
                                    name="social-facebook"
                                    size={30}
                                    color="#71ba58"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
            
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({

    contactImageContainer: {
        alignSelf: 'center',
        marginTop: '15%'
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
