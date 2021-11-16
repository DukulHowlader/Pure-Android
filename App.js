import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigators/DrawerNavigator';
import RootStackScreen from './Navigators/StackNavigator/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default App;


