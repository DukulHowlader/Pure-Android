import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const CartViewScreen = () => {
    const { colors } = useTheme();
    const theme = useTheme();
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

    const increment = async (index, quantity) => {
        let existingEntries = JSON.parse(await AsyncStorage.getItem("addedProducts"));
        existingEntries[index].ProductQuantity = (quantity + 1);
        await AsyncStorage.setItem("addedProducts", JSON.stringify(existingEntries));

    }
    const decrement = async (index, quantity) => {

        if (quantity > 1) {
            let existingEntries = JSON.parse(await AsyncStorage.getItem("addedProducts"));
            existingEntries[index].ProductQuantity = (quantity - 1);
            await AsyncStorage.setItem("addedProducts", JSON.stringify(existingEntries));
        }
    }

    const removeItem = async (productIndex) => {
        let existingEntries = JSON.parse(await AsyncStorage.getItem("addedProducts"));
        existingEntries.splice(productIndex, 1);
        await AsyncStorage.setItem("addedProducts", JSON.stringify(existingEntries));

    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            {
                addedProducts?.length <= 0 &&
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold' }}>No item in cart!</Text>
                </View>

            }
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
                                        <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Price: {addedProduct?.ProductPrice * addedProduct?.ProductQuantity}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                                            <Text style={{ fontSize: 14, marginRight: 10, fontWeight: 'bold', color: colors.text }}>Quantity: </Text>
                                            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => decrement(index, addedProduct.ProductQuantity)}>
                                                <Feather
                                                    name="minus-square"
                                                    size={23}
                                                    color="#3C5A05"
                                                />
                                            </TouchableOpacity>
                                            <TextInput
                                                value={JSON.stringify(addedProduct.ProductQuantity)}
                                                editable={false}
                                                style={{ borderRadius: 5, fontWeight: 'bold', backgroundColor: colors.background, color: colors.text, height: 30 }}
                                            />
                                            <TouchableOpacity style={{ marginRight: 5 }} onPress={() => increment(index, addedProduct.ProductQuantity)}>
                                                <Feather
                                                    name="plus-square"
                                                    size={23}
                                                    color="#3C5A05"
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => removeItem(index)}>
                                                <Feather
                                                    name="x-circle"
                                                    size={25}
                                                    color="#F30400"
                                                />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                {addedProducts.length > 0 && 
                <>
                <View style={{ borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, borderTopColor: colors.text, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Sub Total:</Text>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{totalPrice}/-</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Delivery Charge:</Text>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>60/-</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '95%', alignSelf: 'center' }}>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Total:</Text>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{totalPrice + 60}/-</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 5, marginVertical: 15 }}>
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingHorizontal: 16, 
                        borderRadius: 5, 
                        backgroundColor: '#71ba58',
                        flexDirection:'row',
                        justifyContent:'space-evenly'
                    }}
                    onPress={() => alert('Checkout Button Clicked!')}
                    >
                        <Text style={{fontSize:16, color: '#ffffff', fontWeight:'bold' }}>Proceed Checkout</Text>
                        <Feather
                            name="arrow-right"
                            size={22}
                            color="#ffffff"
                        />
                    </TouchableOpacity>
                </View>
                </>
                }
            </ScrollView>


        </View>
    )
}

export default CartViewScreen;

const styles = StyleSheet.create({
    card: {
        height: 120,
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});
