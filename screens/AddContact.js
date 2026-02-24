import { Text, TextInput, Pressable, KeyboardAvoidingView, } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import { useState } from 'react';

function AddContact({ navigation }) {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bigContainer}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder='nome completo...'
          placeholderTextColor="#999"
          value={name}
          onChangeText={onChangeName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='usuario@outlook.com'
          placeholderTextColor="#999"
          value={email}
          onChangeText={onChangeEmail}
        />
        <Text style={styles.label}>Número</Text>
        <TextInput style={styles.input}
          placeholder='número...'
          placeholderTextColor="#999"
          value={number}
          onChangeText={onChangeNumber}
          keyboardType='numeric'
        />

        <Pressable style={[styles.button, { backgroundColor: '#1670f7', width: '80%', marginTop: 30 }]}
          onPress={() => navigation.navigate('ContactList')}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};

export default AddContact;