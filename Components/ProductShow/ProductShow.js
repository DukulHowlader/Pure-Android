import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Button } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

const ProductShow = ({navigation}) => {

    const [firstProductsDetails, setFirstProductsDetails] = useState([]);
    const [secondProductsDetails, setSecondProductsDetails] = useState([]);
    const [thirdProductsDetails, setThirdProductsDetails] = useState([]);
    const First = 'Beauty';
    const Second = 'Butter & Others';
    const Third = 'Oils';
    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${First}`)
            .then(response => response.json())
            .then(data => setFirstProductsDetails(data))
    }, [First])
    

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${Second}`)
            .then(response => response.json())
            .then(data => setSecondProductsDetails(data))
    }, [Second])

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${Third}`)
            .then(response => response.json())
            .then(data => setThirdProductsDetails(data))
    }, [Third])

    const renderItem = ({ item, index }) => {
        return (

            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 20,
                height: 320,
                marginLeft: 18,
                marginRight: 18,

            }}>
                <Image
                    source={{
                        uri: item.ProductImage
                    }}
                    style={{ width: '100%', height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
                <TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, marginVertical: 15, color: '#12013E' }}>{item.ProductName}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#71ba58" }}>{item.ProductPrice}/-</Text>
                    </View>
                </TouchableOpacity>
                <Button style={{ alignItems: 'flex-end', marginTop: 15 }} onPress={() => navigation.navigate('ProductDetailsScreen', {
                        itemData:item
                    })}>
                    <Text>View Details </Text>
                    <Text><Feather
                        name='arrow-right'
                        size={20}
                    /></Text>
                </Button>
            </View>


        )
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
            <View style={{ width: '90%', alignSelf: 'center', }}>
                <Text style={{
                    fontSize: 22, marginTop: 20,
                    color: '#71ba58',
                    marginBottom: 15,
                    borderBottomWidth: 2,
                    borderBottomColor: '#F67306'
                }}

                >Beauty Products</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        data={firstProductsDetails}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={(item, index) => renderItem(item, index)}
                    />
                </View>
            </View>

            <View style={{ width: '90%', alignSelf: 'center', }}>
                <Text style={{
                    fontSize: 22, marginTop: 40,
                    color: '#71ba58',
                    marginBottom: 15,
                    borderBottomWidth: 2,
                    borderBottomColor: '#F67306'
                }}

                >Butter & Other Products</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }} >
                    <Carousel
                        layout={"default"}
                        data={secondProductsDetails}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={(item, index) => renderItem(item, index)}
                    />
                </View>
            </View>

            <View style={{ width: '90%', alignSelf: 'center', }}>
                <Text style={{
                    fontSize: 22, marginTop: 40,
                    color: '#71ba58',
                    marginBottom: 15,
                    borderBottomWidth: 2,
                    borderBottomColor: '#F67306',
                    marginHorizontal: 10
                }}

                >Oils</Text>

                <View style={{ flex: 1, marginBottom: 30, flexDirection: 'row', justifyContent: 'center', }} >
                    <Carousel
                        layout={"default"}
                        data={thirdProductsDetails}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={(item, index) => renderItem(item, index)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProductShow;