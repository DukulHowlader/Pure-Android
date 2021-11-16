import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const ProductShow = () => {

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
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                
                <Text style={{ fontSize: 20 }}>{item.ProductName}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <Carousel
                    layout={"default"}
                    data={firstProductsDetails}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={(item, index) => renderItem(item, index)}
                />
            </View>
        </SafeAreaView>
    );
}

export default ProductShow;