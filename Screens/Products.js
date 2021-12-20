import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
const Products = ({ route, navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    const { subName } = route.params;

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch(`http://192.168.100.167:5000/category/${subName}`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [subName])
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <ScrollView>
                {
                    products?.map((product) => {
                        return (
                            <TouchableOpacity key={product._id} onPress={() => navigation.navigate('ProductDetailsScreen', {
                                itemData: product
                            })}>
                                <View style={styles.card}>
                                    <View style={styles.cardImgWrapper}>
                                        <Image
                                            source={{
                                                uri: product.ProductImage
                                            }}
                                            resizeMode="cover"
                                            style={styles.cardImg}
                                        />
                                    </View>
                                    <View style={[styles.cardInfo, { backgroundColor: colors.background }]}>
                                        <Text style={[styles.cardTitle, { color: colors.text }]}>{product.ProductName}</Text>
                                        {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
                                        <Text style={{ color: colors.text }}>Price: {product.ProductPrice} BDT</Text>
                                        <Text numberOfLines={2} style={[styles.cardDetails, { color: colors.text }]}>Details: {product.ProductDetails}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    card: {
        height: 100,
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
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});