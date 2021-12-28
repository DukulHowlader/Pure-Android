import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useTheme } from 'react-native-paper';
import { userContext } from '../App';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const PastOrders = ({ navigation }) => {
    const { colors } = useTheme();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [ordersView, setOrdersView] = useState([])
    const id = loggedInUser?.CustomerEmail;

    fetch(`https://immense-cliffs-46216.herokuapp.com/customerOrder/${id}`)
        .then(response => response.json())
        .then(data => {
            setOrdersView(data)
        })
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, marginVertical: 20, color: colors.text }}>Past Orders</Text>
            {ordersView?.map((order, index) =>
                <View style={styles.box} key={index}>
                    <View style={{ marginLeft: 15, }}>
                        <Text style={[styles.textSize,{color:colors.text}]}><FontAwesome name="user" size={18} /> {order.CustomerName}</Text>
                        <Text style={[styles.textSize,{color:colors.text}]}><FontAwesome name="phone" size={18} /> {order.CustomerContact}</Text>
                        <Text style={[styles.textSize,{color:colors.text}]}><FontAwesome name="home" size={18} /> {order.CustomerAddress}</Text>
                    </View>
                    <View style={{ marginLeft: 15, marginTop: 15 }}>
                        <Text style={[styles.textSize, { alignSelf: 'center',color:colors.text }]}>Ordered Products</Text>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between', marginRight:20, marginBottom:10}}>
                            <Text style={{fontSize:15,color:colors.text}}>Product Name</Text>
                            <Text style={{fontSize:15, color:colors.text}}>QTY</Text>
                        </View>
                        {order.products?.map((product, index) =>
                            <View key={index} style={{ flexDirection: 'row', justifyContent:'space-between', marginRight:30}}>
                                <Text  style={{ color: colors.text }}>{index + 1}.  {product.ProductName}</Text>
                                <Text  style={{fontSize:15, textAlign:'right', color: colors.text }}>{product.ProductQuantity}</Text>
                            </View>
                        )}

                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ fontWeight: 'bold', marginRight: 15, fontSize: 15, color: colors.text, textAlign: 'right' }}>
                            Total: {order.products?.reduce((total, product) => total + (parseInt(product.ProductPrice) * (product.ProductQuantity)), parseInt(order.deliveryCharge))}/-
                        </Text>

                    </View>
                </View>
            )}
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
        marginVertical: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#D9FFFF00',
        width: '100%',
    },
    textSize: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})