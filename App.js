import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './EditContact';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{title: 'Usuário', headerBackTitle: '_' }} />
        <Stack.Screen name="ContactList" component={ContactList} options={{headerShown: false}} />
        <Stack.Screen name="AddContact" component={AddContact} options={{headerShown: false}} />
        <Stack.Screen name="EditContact" component={EditContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
