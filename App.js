import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // This hides the header
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: '' }} 
        />
        <Stack.Screen 
          name="PasswordRecovery" 
          component={PasswordRecoveryScreen} 
          options={{ title: '' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
