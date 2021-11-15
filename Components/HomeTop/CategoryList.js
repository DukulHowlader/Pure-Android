import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, LayoutAnimation, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import TopBarStyle from './TopBarStyle'

const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        }
        else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded])

    return (
        <View>
            <TouchableOpacity
                style={TopBarStyle.item}
                onPress={onClickFunction}
            >
                <Text style={TopBarStyle.itemText}>
                    {item.category}
                </Text>
            </TouchableOpacity>
            <View style={{ height: layoutHeight, overflow: 'hidden' }}>
                {
                    item.subCategories?.map((subItem, key) => (
                        <TouchableOpacity
                            key={key}
                            style={TopBarStyle.subContent}
                        >
                            <Text style={TopBarStyle.subText}>
                                {subItem}
                            </Text>
                            <View style={TopBarStyle.separator}>

                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('https://immense-cliffs-46216.herokuapp.com/categories')
            .then(response => response.json())
            .then((data) => {
                setCategories(data.map(function (category) {
                    category.isExpanded = false
                    return category
                }))
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);





    const updateLayOut = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...categories];
        array.map((value, placeIndex) =>
            placeIndex === index
                ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
                : (array[placeIndex]['isExpanded']) = false
        );
        setCategories(array)

    }

    return (
        <SafeAreaView>
            <Icon.Button name="ios-menu" size={25} backgroundColor='#71ba58' onPress={() => setShow(!show)}></Icon.Button>
            {show &&
                <ScrollView>
                    {
                        categories?.map((item, key) => (
                            <ExpandableComponent
                                key={item._id}
                                item={item}
                                onClickFunction={() => {
                                    updateLayOut(key)
                                }}

                            />
                        ))
                    }
                </ScrollView>
            }
        </SafeAreaView>
    );
};

export default CategoryList;