import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity, Image, Alert, ImageBackground, Platform } from 'react-native'
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { userContext } from '../App';
import Animated from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProceedCheckout = () => {
    const { colors } = useTheme();
    const theme = useTheme();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [addedProducts, setAddedProducts] = useState([]);
    const totalPrice = addedProducts?.reduce((total, product) => total + (parseInt(product.ProductPrice) * (product.ProductQuantity)), 0);
    useEffect(() => {
        const readAddedProductData = async () => {
            try {
                const addedProductData = JSON.parse(await AsyncStorage.getItem('addedProducts'));
                setAddedProducts(addedProductData);
            } catch (e) {
                alert("Error from CartView.js", e)
            }
        };
        readAddedProductData()
    }, [addedProducts])

    const handleCheckout = () => {
        if (loggedInUser?.loginInfo === 'true') {
            navigation.navigate('ProceedCheck')
        }
        else {
            Alert.alert(
                "Please login first",
                "",
                [
                    { text: "Login", onPress: () => navigation.navigate('RootStack') }
                ]
            );

        }
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <ScrollView>
                {
                    addedProducts?.map((addedProduct, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.card}>
                                    <View style={styles.cardImgWrapper}>
                                        <Image
                                            source={{
                                                uri: addedProduct.ProductImage
                                            }}
                                            resizeMode="cover"
                                            style={styles.cardImg}
                                        />
                                    </View>
                                    <View style={[styles.cardInfo, { backgroundColor: colors.background }]}>
                                        <Text style={[styles.cardTitle, { color: colors.text }]}>{addedProduct.ProductName}</Text>
                                        <Text style={{ color: colors.text, fontSize: 11, fontWeight: 'bold', marginTop: 5 }}>Price: {addedProduct?.ProductPrice * addedProduct?.ProductQuantity}/-</Text>
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', marginTop: 5 }}>
                                            <Text style={{ fontSize: 11, marginRight: 10, fontWeight: 'bold', color: colors.text }}>Quantity: </Text>
                                            <Text style={{ fontSize: 11, marginRight: 10, fontWeight: 'bold', color: colors.text }}>{addedProduct.ProductQuantity}</Text>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

                <View style={{ borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, borderTopColor: colors.text, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>Sub Total:</Text>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>{totalPrice}/-</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>Delivery Charge:</Text>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>60/-</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>Total:</Text>
                    <Text style={{ color: colors.text, fontSize: 12, fontWeight: 'bold', marginTop: 7 }}>{totalPrice + 60}/-</Text>
                </View>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 5, marginTop: 80, marginBottom: 50 }}>
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        backgroundColor: '#71ba58',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}
                        onPress={() => handleCheckout()}
                    >
                        <Text style={{ fontSize: 14, color: '#ffffff', fontWeight: 'bold' }}>Place Order</Text>
                        <Feather
                            name="arrow-right"
                            size={22}
                            color="#ffffff"
                        />
                    </TouchableOpacity>
                </View> */}

                <View style={{
                    marginTop: 30,
                    borderBottomWidth: 1,
                    width: '95%',
                    alignSelf: 'center',
                    paddingBottom: 10
                }}>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold' }}> Shipping Details</Text>
                </View>

                <View
                    style={{
                        margin: 20,

                    }}
                >
                    <View style={{ alignItems: 'center' }}>


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
                        />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                        <Text style={styles.panelButtonTitle}>Place Order</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>


        </View>
    );
}



export default ProceedCheckout;

const styles = StyleSheet.create({
    card: {
        height: 75,
        marginVertical: 10,
        marginHorizontal: 8,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 13,
        fontWeight: 'bold',
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
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#71ba58',
        alignItems: 'center',
        marginTop: 20,
        marginBottom:30,
        width:'50%',
        alignSelf:'center'
      },

})