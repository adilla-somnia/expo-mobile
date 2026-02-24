import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoginScreen({ navigation }) {
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>

             <Image
        style={styles.logo}
        source={require('./assets/user_placeholder_green.png')}
      />

            <Text style={styles.label}>Usuário</Text>
                <TextInput
                style={styles.input}
                placeholder='usuário...'
                placeholderTextColor="#999"
                 />
            

            <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input}
                placeholder='senha...'
                placeholderTextColor="#999"
               secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                 />
            
            <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, {backgroundColor: '#1670f7'}]}
            onPress={() => navigation.navigate('ContactList') }
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable
            style={[styles.button, {backgroundColor: '#FF1616'}]}
            onPress={() => navigation.navigate('SignupScreen') }
            >
              <Text style={styles.buttonText}>Cadastrar-se</Text>
            </Pressable>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    height: 40
  },
  button: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5 
  },
  buttonContainer: {
    bottom: -60,
    flexDirection: 'column',
    width: '85%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    textAlign: 'center'
  },
  label: {
    textAlign: 'left',
    width: "80%",
    marginTop: 10,
    fontSize: 20
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    borderWidth: 0.1,
    margin: 30
  },
});

export default LoginScreen;