import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
           
        </View>
    );
}



export default Loader;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.6)',
        zIndex:5,
        flex:1
    },
})