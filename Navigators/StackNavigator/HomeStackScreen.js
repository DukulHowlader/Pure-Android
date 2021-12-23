import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import SubCategoryScreen from '../../Screens/SubCategoryScreen';
import Products from '../../Screens/Products';
import ProductDetailsScreen from '../../Screens/ProductDetailsScreen';
import CartViewScreen from '../../Screens/CartViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PastOrders from '../../Screens/PastOrders';
import ProceedCheckout from '../../Screens/ProceedCheckout';
import OrderSuccess from '../../Components/OrderSuccess/OrderSuccess';


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen({ navigation }) {

    const [addedProducts, setAddedProducts] = useState([])
    useEffect(() => {
        const readAddedProductData = async () => {
            try {
                const addedProductData = JSON.parse(await AsyncStorage.getItem('addedProducts'));
                setAddedProducts(addedProductData);
            } catch (e) {
                alert(e)
            }
        };
        readAddedProductData();
    }, [addedProducts])
    const { colors } = useTheme();
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.background,
                fontWeight: 'bold',
            },
            headerShadowVisible: false,
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    title: 'PURE CARE BD',
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginStart: 30 }}>
                            <Icon.Button name="ios-search" size={22} color={colors.text} backgroundColor={colors.background} onPress={() => navigation.openDrawer()}></Icon.Button>
                            <Icon.Button name="ios-cart" size={22} color={colors.text}
                                backgroundColor={colors.background} onPress={() => navigation.navigate('CartViewScreen')}>
                                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold' }}>({addedProducts?.length || 0})</Text>
                            </Icon.Button>
                        </View>)
                }}
            />
            <HomeStack.Screen name="SubCategoryScreen" component={SubCategoryScreen}
                options={({ route }) => ({
                    title: route.params.title,

                })}
            />
            <HomeStack.Screen name="ProductsScreen" component={Products}
                options={({ route }) => ({
                    title: route.params.title,

                })}
            />
            <HomeStack.Screen name="CartViewScreen" component={CartViewScreen}
                options={() => ({
                    title: 'Cart Item(s)'
                })}
            />

            <HomeStack.Screen name="PastOrders" component={PastOrders}
                options={() => ({
                    title: ''
                })}
            />
            <HomeStack.Screen name="SuccessScreen" component={OrderSuccess}
               options={{headerShown: false}}
            />
            <HomeStack.Screen name="ProceedCheck" component={ProceedCheckout}
                options={() => ({
                    title: 'Proceed Checkout'
                })}
            />

            <HomeStack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}
                options={({ route }) => ({
                    headerBackTitleVisible: false,
                    title: '',
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    itemData: route.params.itemData,
                    headerTintColor: '#fff'

                })}
            />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
