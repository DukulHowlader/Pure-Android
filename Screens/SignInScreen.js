import React, { useContext, useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userContext } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [data, setData] = useState({
        email: '',
        password: '',
        check_email: false,
        secureTextEntry: true
    });
    const {colors} = useTheme();

    const emailCheck = (value) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(value) === true) {
            setData({
                ...data,
                email: value,
                check_email: true,
            });
        }
        else {
            setData({
                ...data,
                check_email: false,
            });
        }
    }

    const handlePassView = (value) => {
        setData({
            ...data,
            password: value,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = async (loginEmail, loginPassword) => {

        try {
            const loginData = {
                loginEmail: loginEmail,
                loginPassword: loginPassword
            }
            fetch('https://immense-cliffs-46216.herokuapp.com/loginUser', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
                .then(response => response.json())
                .then(result => {
                    if (result.loginInfo === 'true') {
                        setLoggedInUser(result);
                        storeData()
                        navigation.navigate('Home')

                    }
                    else {
                        alert("Not Registered!")
                    }
                })
        }
        catch (error) {
            console.log(error)
        }

    }


    // const storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('id', loggedInUser._id);
    //         await AsyncStorage.setItem('name', JSON.stringify(loggedInUser.CustomerName));
    //         await AsyncStorage.setItem('contact', JSON.stringify(loggedInUser.CustomerContact));
    //         await AsyncStorage.setItem('email', JSON.stringify(loggedInUser.CustomerEmail));
    //         await AsyncStorage.setItem('address', JSON.stringify(loggedInUser.CustomerAddress));
    //         await AsyncStorage.setItem('loginInfo', JSON.stringify(loggedInUser.loginInfo));
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };


    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#71ba58" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>
                        Welcome!
                    </Text>
                </View>
                <Animatable.View style={[styles.footer,{
                    backgroundColor: colors.background
                }]} animation="fadeInUpBig">
                    <Text style={[styles.text_footer,{
                        color:colors.text
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o"
                            color={colors.text}
                            size={20} />
                        <TextInput
                            placeholder="Your Email"
                            placeholderTextColor='#666666'
                            style={[styles.textInput,{color:colors.text}]}
                            autoCapitalize="none"
                            onChangeText={(value) => emailCheck(value)}
                        />
                        {data.check_email ?
                            <Animatable.View animation="bounceIn">
                                <Feather
                                    name="check-circle"
                                    color={colors.text}
                                    size={20}
                                />
                            </Animatable.View>
                            :
                            null
                        }
                    </View>

                    <Text style={[styles.text_footer, { color:colors.text,marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor='#666666'
                            style={[styles.textInput,{color:colors.text}]}
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(value) => handlePassView(value)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={[styles.signIn, { width: '100%' }]}
                            onPress={() => { loginHandle(data.email, data.password) }} >
                            <LinearGradient
                                colors={['#AECA80', '#71ba58']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderColor: '#71ba58',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, { color: "#71ba58" }]}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignInScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71ba58',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3.5,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginRight: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});