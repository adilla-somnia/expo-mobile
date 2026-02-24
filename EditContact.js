import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function EditContact({navigation, route}) {
    const { full_name, email, number } = route.params;

    return(
        <View style={styles.container}>
            <Text>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='nome completo...'
                value={full_name}
                placeholderTextColor="#999"
                 />
            <Text>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
                value={email}
                placeholderTextColor="#999"
                 />
            <Text>Número</Text>
                <TextInput style={styles.input}
                placeholder='número...'
                value={number}
                placeholderTextColor="#999"
                 />
                 
            <Button title="Alterar"
            onPress={() => navigation.navigate('ContactList') }
            ></Button>
            <Button title="Excluir"
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

export default EditContact;