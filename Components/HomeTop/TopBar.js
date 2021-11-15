import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper';
import CategoryList from './CategoryList';

import TopBarStyle from './TopBarStyle'


const TopBar = () => {
    return (
        <View style={TopBarStyle.TopMenuView}>
            <Text style={TopBarStyle.CompanyName}>PURE CARE BD</Text>
            <TextInput placeholder={'    Search for Products...'} style={TopBarStyle.SearchBar}>
            </TextInput>
            <View>
                <Button
                 style={{borderWidth:1,borderColor:'#71ba58', marginVertical:10}} onPress={() => {alert('cart button clicked!!')}}
                ><Text style={{color:'#71ba58'}}>Cart item (0)</Text></Button>
            </View>
        </View>

    );
};

export default TopBar;
