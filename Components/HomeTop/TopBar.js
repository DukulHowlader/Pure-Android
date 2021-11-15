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
            <View style={{flexDirection:"row"}}>
                <View style={{flex:1.8}}>
                    <TextInput placeholder={'    Search for Products...'} style={TopBarStyle.SearchBar}>
                    </TextInput>
                </View>
                <View style={{flex:1}}>
                    <Button
                        style={{ borderWidth: 1,justifyContent: 'flex-end', borderColor: '#71ba58', marginVertical: 8,marginHorizontal:10, }} onPress={() => { alert('cart button clicked!!') }}
                    ><Text style={{ color: '#71ba58' }}>Cart(0)</Text></Button>
                </View>
            </View>
        </View>



    );
};

export default TopBar;
