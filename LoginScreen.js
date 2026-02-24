import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoginScreen({ navigation }) {
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Text>Usuário</Text>
                <TextInput
                style={styles.input}
                placeholder='usuário...'
                placeholderTextColor="#999"
                 />
            <Text>Senha</Text>
                <TextInput style={styles.input}
                placeholder='senha...'
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                 />
                 
            <Button title="Login"
            onPress={() => navigation.navigate('ContactList') }
            ></Button>

            <Button
            title='Cadastrar-se'
            onPress={() => navigation.navigate('SignupScreen') }
            ></Button>
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
    width: '50%',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    marginBottom: 5
  },
});

export default LoginScreen;