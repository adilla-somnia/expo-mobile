import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './EditContact';
import { Ionicons } from '@expo/vector-icons';
import AddContactButton from './AddContactButton';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{title: 'Usuário', headerBackButtonDisplayMode: 'minimal'}} />
        <Stack.Screen name="ContactList" component={ContactList}
        options={{
          title: 'Lista de Contatos',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerBackVisible: false,
          headerRight: () => (
          <AddContactButton></AddContactButton>
        ) }} />

        <Stack.Screen name="AddContact" component={AddContact}
        options={{title: 'Contato',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerBackButtonDisplayMode: 'minimal',
                headerTintColor: 'white'
                }} />

        <Stack.Screen name="EditContact" component={EditContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
