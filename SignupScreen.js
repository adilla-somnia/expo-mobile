import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function SignupScreen({navigation}) {
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='seu nome completo...'
                placeholderTextColor="#999"
                 />
            <Text>CPF</Text>
                <TextInput
                style={styles.input}
                placeholder='xxx.xxx.xxx-xx'
                placeholderTextColor="#999"
                 />

            <Text>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
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
                 
            <Button title="Salvar Cadastro"
            onPress={() => navigation.navigate('ContactList') }
            ></Button>

        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '60%',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    marginBottom: 15,
  },
});

export default SignupScreen;