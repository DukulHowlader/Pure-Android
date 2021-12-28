import React, { createRef, useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, StatusBar, Alert } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { userContext } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

export default function EditProfileScreen({navigation}) {
    const { colors } = useTheme();
    const theme = useTheme();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [updatingLoader, setUpdatingLoader] = useState(false);

    if(updatingLoader){
        return (
            <View style={[StyleSheet.absoluteFill, styles.loaderContainer]}>
                <LottieView source={require('../Components/Loader/68202-update.json')} autoPlay loop />
            </View>
        );
    }
    
    const customerName = (value) => {
        setLoggedInUser(
            {
                ...loggedInUser,
                CustomerName: value,
            }
        )
    }
    const customerContact = (value) => {

        setLoggedInUser(
            {
                ...loggedInUser,
                CustomerContact: value,
            }
        )
    }
    const customerAddress = (value) => {
        setLoggedInUser(
            {
                ...loggedInUser,
                CustomerAddress: value,
            }
        )
    }
    const handleUpdate = () => {
        
        const numberChecker =  /(^(\+|01))[1|3-9]{1}(\d){8}$/;
        if (loggedInUser.CustomerContact != null && loggedInUser.CustomerAddress != null) {
            if (numberChecker.test(loggedInUser.CustomerContact)) {
                setUpdatingLoader(true)
                fetch(`https://immense-cliffs-46216.herokuapp.com/updateCustomer/${loggedInUser?._id}`, {

                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedInUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data === true) {
                            AsyncStorage.setItem('key', JSON.stringify(loggedInUser));
                            setUpdatingLoader(false);

                        }
                    })
            }
            else{
                Alert.alert(
                    "Enter valid contact number",
                    "",
                    [
                        { text: "ok" }
                    ]
                );
            }
        }
        else {
            Alert.alert(
                "Please fill up required fields properly",
                "",
                [
                    { text: "ok" }
                ]
            );
        }

    }



    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={() => { }}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )
    let bs = createRef();
    let fall = new Animated.Value();
    return (
        <View style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <BottomSheet
                ref={bs}
                snapPoints={[320, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View
                style={{
                    margin: 20,

                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { bs.current.snapTo(0) }}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ImageBackground
                                source={{
                                    uri: 'https://www.w3schools.com/howto/img_avatar.png'
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: "center",
                                }}>
                                    <Icon
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                            opacity: 0.8,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold', color: colors.text }}>
                        {loggedInUser?.CustomerName}
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                        color={colors.text}
                    />
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor="#666666"
                        defaultValue={loggedInUser?.CustomerName}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCorrect={false}
                        onChangeText={(value) => customerName(value)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome
                        name="envelope-o"
                        size={20}
                        color={colors.text}
                    />
                    <TextInput
                        defaultValue={loggedInUser?.CustomerEmail}
                        editable={false}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCorrect={false}
                        selectTextOnFocus={false}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.action}>
                    <Feather
                        name="phone"
                        size={20}
                        color={colors.text}
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        defaultValue={loggedInUser?.CustomerContact}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCorrect={false}
                        keyboardType="number-pad"
                        onChangeText={(value) => customerContact(value)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome
                        name="map-marker"
                        size={20}
                        color={colors.text}
                    />
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor="#666666"
                        defaultValue={loggedInUser?.CustomerAddress}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCorrect={false}
                        onChangeText={(value) => customerAddress(value)}
                    />
                </View>

                <TouchableOpacity style={styles.commandButton} onPress={() => handleUpdate()}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#71ba58',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    loaderContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.6)',
        zIndex:5,
        flex:1
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#71ba58',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
    },
});
