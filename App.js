import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ContactList from './screens/ContactList';
import AddContact from './screens/AddContact';
import EditContact from './screens/EditContact';
import AddContactButton from './components/AddContactButton';
import { styles } from './style/styles';
import HomeNew from './screens/HomeNew';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeNew'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: 'Usuário', headerBackButtonDisplayMode: 'minimal' }} />
        <Stack.Screen name="ContactList" component={ContactList}
          options={{
            title: 'Lista de Contatos',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerBackVisible: false,
            headerRight: () => (
              <AddContactButton></AddContactButton>
            )
          }} />

        <Stack.Screen name="AddContact" component={AddContact}
          options={{
            title: 'Contato',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerBackButtonDisplayMode: 'minimal',
            headerTintColor: 'white'
          }} />

        <Stack.Screen name="EditContact" component={EditContact}
          options={{
            title: 'Contato',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerBackButtonDisplayMode: 'minimal',
            headerTintColor: 'white'
          }} />
          <Stack.Screen name ="HomeNew" component={HomeNew}
          options={{
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
