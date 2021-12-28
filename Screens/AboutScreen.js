import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Footer from '../Components/Footer/Footer';
import { useTheme } from 'react-native-paper';
export default function AboutScreen() {
    const {colors} = useTheme();

    const values =[
        {
            id:1,
            Option:'Service to all'
        },
        {
            id:2,
            Option:'Total integrity'
        },
        {
            id:3,
            Option:'Absolute commitment to quality'
        },
        {
            id:4,
            Option:'Respect and devotion to Mother Nature'
        },
        {
            id:5,
            Option:'No compromise on being who we are'
        },
    ]
    return (
        <ScrollView>
            <View style={[styles.headerTextView, { flexDirection: 'row' }]}>
                <View style={{ marginRight: 8 }}>
                    <Text style={[styles.headerText, {
                        borderBottomColor: '#f76c2f',
                        borderBottomWidth: 4,
                        color:colors.text
                    }]}>Our</Text>
                </View>
                <View>
                    <Text style={[styles.headerText,{color:colors.text}]}>Company</Text>
                </View>
            </View>
            <View style={[styles.headerTextView, { marginVertical: 20 }]}>
                <Text style={[styles.text,{color:colors.text}]}>PURE CARE BD is committed to being a trustworthy and innovative global leader by providing genuine True Wellness products. Our advanced processing methods and dehydration technologies ensure that our herbs retain their maximum level of potency for the highest quality, most effective, pure and natural True Wellness products available in the market today. Our success serves as living proof that shared abundance can be created with an uncompromising commitment to environmental and social responsibility.
                </Text>
                <Text style={[styles.text, { marginTop: 15, color:colors.text}]}>
                    Sustainability in the near future will continue to priorities R&D investment to identify new formulations and processes that can replace existing materials and ingredients with sustainable alternatives. Pure Care BD is an online store where people can buy organic food supplements, organic skin care products and organic hair care products. Some of the products are imported and some of them are local grown. As people are now more conscious about their health, skin and hair so they would like to consume or use organic products as they are chemical free. Organic items are rare nowadays so we are making it available for a betterment of everyone.
                </Text>
            </View>
            <View style={[styles.headerTextView, { flexDirection: 'row', justifyContent: 'center' }]}>
                <View>
                    <Text style={[styles.headerText,{color:colors.text}]}>Vision ,</Text>
                </View>
                <View style={{ marginHorizontal: 8 }}>
                    <Text style={[styles.headerText, {
                        borderBottomColor: '#f76c2f',
                        borderBottomWidth: 4,
                        color:colors.text
                    }]}>Mission</Text>
                </View>
                <View>
                    <Text style={[styles.headerText,{color:colors.text}]}>& Values</Text>
                </View>
            </View>
            <View style={styles.headerTextView}>
                <Text style={[styles.text, { fontWeight: 'bold',color:colors.text}]}>Our Vision</Text>
                <Text style={[styles.text,{color:colors.text}]}>To be a Vehicle of Consciousness in the global market by creating an holistic, sustainable business modality, which inspires, promotes and supports True Wellness and respect for all Beings and for Mother Nature.</Text>
            </View>
            <View style={styles.headerTextView}>
                <Text style={[styles.text, { fontWeight: 'bold',color:colors.text }]}>Our Mission</Text>
                <Text style={[styles.text,{color:colors.text}]}>To be a trustworthy and innovative global leader in providing genuine organic True Wellness products and solutions for conscious, healthy living.</Text>
            </View>
            <View style={[styles.headerTextView,{marginBottom:30}]}>
                <Text style={[styles.text, { fontWeight: 'bold',color:colors.text }]}>Our Core Values</Text>
                {values.map((value) => 
                    <View key={value.id} style={{flexDirection:'row',  alignItems:'center'}}>
                    <View>
                        <FontAwesome
                            name="square-o"
                            size={13}
                        />
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={[styles.text,{color:colors.text}]}>{value.Option}</Text>
                    </View>
                    </View>
                )}
            </View>
            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTextView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    text: {
        fontSize: 16
    }
})
