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


