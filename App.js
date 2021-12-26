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

import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './Components/AuthContext/AuthContext';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import DrawerNavigator from './Navigators/DrawerNavigator/DrawerNavigator';

export const userContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(useEffect(() => {
    const readData = async () => {
      try {
        const userData = JSON.parse(await AsyncStorage.getItem('key'));
        setLoggedInUser(userData)
      } catch (e) {
        alert("Error from app.js",e)
      }
    };
    readData()
  }, [])
  )


  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: "#333333"
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: "#ffffff"
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const authContext = useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme)
    }
  }), [])

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  },[])

  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:'center' }}>
        <LottieView source={require('./icons/67504-100-bio-organic-label-animation.json')} autoPlay loop/>
      </View>
    )
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <NavigationContainer theme={theme}>
            <DrawerNavigator/>
          </NavigationContainer>
        </userContext.Provider>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;


