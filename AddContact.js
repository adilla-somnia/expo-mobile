import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function AddContact({navigation}) {

    return(
        <View style={styles.container}>
            <Text>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='nome completo...'
                placeholderTextColor="#999"
                 />
            <Text>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
                placeholderTextColor="#999"
                 />
            <Text>Número</Text>
                <TextInput style={styles.input}
                placeholder='número...'
                placeholderTextColor="#999"
                 />
                 
            <Button title="Salvar"
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

export default AddContact;