import { StyleSheet } from "react-native";

const TopBarStyle = StyleSheet.create({
    TopMenuView:{
        alignItems:'center',
    },
    CompanyName :{
        fontFamily: 'sans-serif',
        marginTop:20,
        marginBottom: 20,
        textAlign:"center",
        fontSize:23,
        color: '#71ba58',
        fontWeight:'bold',

    },

    SearchBar:{
        width:'70%',
        height:40,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'green',
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10
    },
    // topContainer:{
    //     flex:1
    // },
    // topHeader:{
    //     flexDirection:'row',
    //     padding: 20
    // },

    // titleText:{
    //     flex:1,
    //     fontSize:22,
    //     fontWeight:'bold'
    // },

    

    item:{
        backgroundColor:"#71ba58",
        padding:10
    },
    itemText:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff'
    },
    subContent:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
    },
    subText:{
        fontSize:16,
        padding: 10,
        color:'#000'
    },
    separator:{
        height:0.5,
        backgroundColor:'#c8c8c8',
        width: '100%'
    }
})
export default TopBarStyle;