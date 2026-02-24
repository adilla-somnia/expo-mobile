import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';

function EditContact({navigation, route}) {
    const { full_name, email, number } = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='nome completo...'
                value={full_name}
                placeholderTextColor="#999"
                 />
            <Text style={styles.label}>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
                value={email}
                placeholderTextColor="#999"
                 />
            <Text style={styles.label}>Número</Text>
                <TextInput style={styles.input}
                placeholder='número...'
                value={number}
                placeholderTextColor="#999"
                 />
                 
            <View style={[styles.buttonContainer, { marginTop: -20 }]}>
            <Pressable style={[styles.button, {backgroundColor: '#1670f7'}]}
            onPress={() => navigation.navigate('ContactList') }
            >
              <Text style={styles.buttonText}>Alterar</Text>
            </Pressable>
            <Pressable style={[styles.button, {backgroundColor: '#FF1616'}]}
            onPress={() => navigation.navigate('ContactList') }
            >
              <Text style={styles.buttonText}>Excluir</Text>
            </Pressable>
            </View>

        </View>
    )
};

export default EditContact;