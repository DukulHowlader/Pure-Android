import React, { createContext, useEffect, useMemo } from 'react';
import { 
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} 
from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
}
from "react-native-paper"
import DrawerNavigator from './Navigators/DrawerNavigator';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './Components/AuthContext/AuthContext';


export const userContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme ={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      backgroundColor:'#ffffff',
      text:"#333333"
    }
  }

  const CustomDarkTheme ={
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      backgroundColor:'#333333',
      text:"#ffffff"
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const authContext = useMemo(() => ({
    toggleTheme : () => {
      setIsDarkTheme( isDarkTheme =>  !isDarkTheme)
  }
  }),[])
  const readData = async () => {
    try {
      const id = JSON.parse(await AsyncStorage.getItem('id'));
      // const id = JSON.parse(await AsyncStorage.getItem('name'));
      // const CustomerContact = JSON.parse(await AsyncStorage.getItem('contact'));
      // const id = JSON.parse(await AsyncStorage.getItem('email'));
      // const CustomerAddress = JSON.parse(await AsyncStorage.getItem('address'));
      // const id = JSON.parse(await AsyncStorage.getItem('loginInfo'));
      return(id)
    } catch (e) {
      alert(e)
    }
  };

  const [loggedInUser, setLoggedInUser] = useState({})
   
// useEffect(() => {
//  setLoggedInUser(
//    readData()
//  )
// },[])
  

  // const authContext = useMemo(() => {
  //   signIn: () => {
  //     setUserToken('fgkj')
  //     setIsLoading(false)
  //   }
  //   signOut: () => {
  //     setUserToken(null)
  //     setIsLoading(false)
  //   }
  //   signUp: () => {
  //     setUserToken('fgkj')
  //     setIsLoading(false)
  //   }
  // })

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000);
  // }, [])

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <NavigationContainer theme={theme}>
        <DrawerNavigator />
      </NavigationContainer>
    </userContext.Provider>
    </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;


