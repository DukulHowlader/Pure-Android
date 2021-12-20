import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, TouchableOpacity, Dimensions, TextInput, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'react-native-paper';

const SignUpScreen = ({ navigation }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_pass: '',
        check_email: false,
        check_text: false,
        secureTextEntry: true,
        secureConfirmTextEntry: true,
    });

    const handleRegistration = () => {
        const CustomerData = {
            CustomerName: data.name,
            CustomerEmail: data.email,
            CustomerContact: null,
            CustomerAddress: null,
            CustomerPass: data.password,
            CustomerImage: null,

        }
        fetch('https://immense-cliffs-46216.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(CustomerData)
        })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    Alert.alert(
                        "Registration Successful!",
                        "",
                        [
                            { text: "OK", onPress: () => navigation.navigate('SingInScreen') }
                        ]
                    );

                }

                else if (data[0] === 'invalid') {
                    alert('Invalid Email. Please check your email address')
                }

                else {
                    alert('Registration failed!!')
                }
            })
    }
    const { colors } = useTheme();



    const textInputCheck = (value) => {
        if (value.length != 0) {
            setData({
                ...data,
                name: value,
                check_text: true
            });
        }
        else {
            setData({
                ...data,
                check_text: false
            });
        }
    }

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
    const handleConPassView = (value) => {
        setData({
            ...data,
            confirm_password: value,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            secureConfirmTextEntry: !data.secureConfirmTextEntry
        })
    }
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <StatusBar backgroundColor="#71ba58" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>
                        Register Now!
                    </Text>
                </View>
                <Animatable.View style={[styles.footer, { backgroundColor: colors.background }]} animation="fadeInUpBig">
                    <Text style={[styles.text_footer, { color: colors.text }]}>Full Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o"
                            color={colors.text}
                            size={20} />
                        <TextInput
                            placeholder="Your Full Name"
                            style={[styles.textInput, { color: colors.text }]}
                            placeholderTextColor="#666666"
                            autoCapitalize="none"
                            onChangeText={(value) => textInputCheck(value)}
                        />
                        {data.check_text ?
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
                    <Text style={[styles.text_footer], { marginTop: 20, color: colors.text }}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o"
                            color={colors.text}
                            size={20} />
                        <TextInput
                            placeholder="Your Email"
                            style={[styles.textInput, { color: colors.text }]}
                            placeholderTextColor="#666666"
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

                    <Text style={[styles.text_footer, { marginTop: 20, color: colors.text }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            style={[styles.textInput, { color: colors.text }]}
                            placeholderTextColor="#666666"
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

                    <Text style={[styles.text_footer, { marginTop: 20, color: colors.text }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            style={[styles.textInput, { color: colors.text }]}
                            placeholderTextColor="#666666"
                            autoCapitalize="none"
                            secureTextEntry={data.secureConfirmTextEntry ? true : false}
                            onChangeText={(value) => handleConPassView(value)}
                        />
                        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                            {data.secureConfirmTextEntry ?
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


                        <LinearGradient
                            colors={['#AECA80', '#71ba58']}
                            style={styles.signIn}
                        >
                            <TouchableOpacity onPress={() => handleRegistration()}>
                                <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
                            </TouchableOpacity>
                        </LinearGradient>


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#71ba58',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, { color: "#71ba58" }]}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View >
        </KeyboardAwareScrollView >
    );
};

export default SignUpScreen;

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
        flex: 5,
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
        marginTop: 40,
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