import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Platform, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { TextInput, useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;




const ProductDetailsScreen = ({ route }) => {
    const { itemData } = route.params;
    const { colors } = useTheme();
    const [quantity, setQuantity] = useState('1');

    const increment = () => {
        const getIncrementQuantity = JSON.parse(quantity);
        setQuantity(JSON.stringify(getIncrementQuantity + 1))
    }
    const decrement = () => {
        const getDecrementQuantity = JSON.parse(quantity);
        if (getDecrementQuantity > 1) {
            setQuantity(JSON.stringify(getDecrementQuantity - 1))
        }
    }

    const handleAddProduct = async () => {
        const qnt = JSON.parse(quantity);
        itemData.ProductQuantity = qnt;
        let existingEntries = JSON.parse(await AsyncStorage.getItem("addedProducts"));
        if (existingEntries == null) existingEntries = [];
        AsyncStorage.setItem("added", JSON.stringify(itemData));
        existingEntries.push(itemData);
        AsyncStorage.setItem("addedProducts", JSON.stringify(existingEntries));
        alert('Added Successfully')
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <ImageHeaderScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                renderHeader={() => (
                    <Image source={{
                        uri: itemData?.ProductImage
                    }} style={styles.image} />
                )}

            >
                <TriggeringView style={styles.section}>
                    <View>
                        <Text style={styles.title}>{itemData.ProductName}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, marginTop: 10 }}>Available: {itemData.ProductAvailability === 'YES' ?
                                <Text style={{ color: '#71ba58' }}>
                                    In Stock  <Feather
                                        name="check-circle"
                                        color="#71ba58"
                                        size={18}
                                    />
                                </Text>

                                :
                                <Text style={{ color: '#AD0505' }}>
                                    Stock Out <Feather
                                        name="x-circle"
                                        color="#AD0505"
                                        size={20}
                                    />
                                </Text>
                            }</Text>
                        </View>
                    </View>
                </TriggeringView>
                <View style={styles.section}>
                    <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, marginRight: 10, fontWeight: 'bold' }}>Quantity: </Text>
                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => decrement()}>
                            <Feather
                                name="minus-square"
                                size={40}
                                color="#3C5A05"
                            />
                        </TouchableOpacity>
                        <TextInput
                            value={quantity}
                            editable={false}
                            style={{ borderRadius: 5, fontWeight: 'bold', backgroundColor: colors.background, color: colors.text, height: 36 }}
                        />
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => increment()}>
                            <Feather
                                name="plus-square"
                                size={40}
                                color="#3C5A05"
                            />
                        </TouchableOpacity>

                    </View>
                    {itemData.ProductAvailability === 'YES' ?
                        <TouchableOpacity style={styles.cartBtn} onPress={() => handleAddProduct()}>
                            <Feather
                                name="shopping-cart"
                                size={20}
                                color="#ffffff"
                            />
                            <Text style={{ color: "#ffffff", fontWeight: 'bold' }}> ADD TO CART</Text>
                        </TouchableOpacity>
                        :
                        null
                    }

                </View>
                <View style={[styles.section, styles.sectionLarge]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Details:</Text>
                    <Text style={styles.sectionContent}>{itemData.ProductDetails}</Text>
                </View>
                <View style={[styles.section, styles.sectionLarge]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Usage:</Text>
                    <Text style={styles.sectionContent}>{itemData.ProductUsage}</Text>
                </View>

            </ImageHeaderScrollView>
        </View>
    )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    cartBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        width: '40%',
        padding: 10,
        backgroundColor: '#71ba58',
        borderRadius: 5,

    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginRight: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 5,
        color: '#05375a'
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        minHeight: 300,
    },
})
