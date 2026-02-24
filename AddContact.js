import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { styles } from './styles';

function AddContact({navigation}) {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='nome completo...'
                placeholderTextColor="#999"
                 />
            <Text style={styles.label}>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
                placeholderTextColor="#999"
                 />
            <Text style={styles.label}>Número</Text>
                <TextInput style={styles.input}
                placeholder='número...'
                placeholderTextColor="#999"
                 />
                 
            <Pressable style={[styles.button, {backgroundColor: '#1670f7', width: '80%', marginTop: 30}]}
            onPress={() => navigation.navigate('ContactList') }
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>

        </View>
    )
};

export default AddContact;