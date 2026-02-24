import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

function SignupScreen({navigation}) {
    const [password, setPassword] = useState('');

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bigContainer}
        >
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder='seu nome completo...'
                placeholderTextColor="#999"
                 />
            <Text style={styles.label}>CPF</Text>
                <TextInput
                style={styles.input}
                placeholder='xxx.xxx.xxx-xx'
                placeholderTextColor="#999"
                 />

            <Text style={styles.label}>Email</Text>
                <TextInput
                style={styles.input}
                placeholder='usuario@outlook.com'
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
            
            <Pressable style={[styles.button, {backgroundColor: '#1670f7', width: 300, marginTop: 40}]}
            onPress={() => navigation.navigate('ContactList') }
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>

        </SafeAreaView>
    </KeyboardAvoidingView>
    )
};

export default SignupScreen;