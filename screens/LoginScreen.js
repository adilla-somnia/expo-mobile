import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import { Platform } from 'react-native';
import login from '../api/users';


function LoginScreen({ navigation }) {
  const [password, onChangePassword] = useState('');
  const [username, onChangeUsername] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // limpa campos ao entrar na página
  useEffect(() => {
    onChangePassword('');
    onChangeUsername('');
  }, [])

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
          required
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
          required
        />

        {errorVisible ? (
          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        ) : null}

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: '#1670f7' }]}

            onPress={async () => {

              // validando que os inputs estão preenchidos
              if (!username || !password) {
                setErrorVisible(true);
                setErrorMessage('Preencha todos os campos!')
                return;
              }

              try {
                // fazendo request de login
                const result = await login(username, password);

                if (result.id === "") {
                  setErrorMessage('Login/senha incorretos!');
                  setErrorVisible(true);
                  return;
                } else {
                  // limpando campos
                  onChangePassword('');
                  onChangeUsername('');
                  setErrorMessage('');
                  setErrorVisible(false);

                  // seguindo navegação
                  navigation.reset({
                    index: 1,
                    routes: [
                      { name: 'LoginScreen' },
                      { name: 'ContactList', params: { user: result } }
                    ]
                  })
                  return;
                }

              } catch (error) {
                console.log('Login error:', error);
              }
            }
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