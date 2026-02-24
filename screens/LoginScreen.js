import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import { Platform } from 'react-native';

function LoginScreen({ navigation }) {
  const [password, onChangePassword] = useState('');
  const [username, onChangeUsername] = useState('');


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bigContainer}
    >
      <SafeAreaView style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../assets/user_placeholder_green.png')}
        />

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder='usuário...'
          placeholderTextColor="#999"
          require={true}
          value={username}
          onChangeText={onChangeUsername}
        />


        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}
          placeholder='senha...'
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
          require={true}
        />

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: '#1670f7' }]}
            onPress={() => navigation.navigate('ContactList')
            }
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable
            style={[styles.button, { backgroundColor: '#FF1616' }]}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text style={styles.buttonText}>Cadastrar-se</Text>
          </Pressable>

        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};

export default LoginScreen;