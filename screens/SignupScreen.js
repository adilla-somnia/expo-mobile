import { useState } from 'react';
import { Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { styles } from '../style/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { signup } from '../api/users';
import { isValidCPF, isValidEmail, isValidPhone, isValidPassword } from '../functions/Validation';

function SignupScreen({ navigation }) {
  const [password, onChangePassword] = useState('');
  const [cpf, onChangeCpf] = useState('');
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
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
          value={name}
          onChangeText={onChangeName}
        />
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder='xxx.xxx.xxx-xx'
          placeholderTextColor="#999"
          value={cpf}
          onChangeText={onChangeCpf}
          keyboardType='numeric'
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='usuario@outlook.com'
          placeholderTextColor="#999"
          value={email}
          onChangeText={onChangeEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}
          placeholder='senha...'
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
        />

        {errorVisible ? (
          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        ) : null}

        <Pressable style={[styles.button, { backgroundColor: '#1670f7', width: 300, marginTop: 40 }]}

          onPress={async () => {

            setErrorMessage('');

            // validando se os inputs estão preenchidos
            if (!name || !cpf || !email || !password) {
              setErrorMessage("Preencha todos os campos corretamente!")
              setErrorVisible(true);
              return;
            }

            // validando CPF
            if (!isValidCPF(cpf)) {
              setErrorMessage("CPF inválido!")
              setErrorVisible(true);
              return;
            }

            // validando email
            if (!isValidEmail(email)) {
              setErrorMessage("Email inválido!")
              setErrorVisible(true);
              return;
            }

            // validando senha (acima de 8 caracteres)
            if (!isValidPassword(password)) {
              setErrorMessage("A sua senha deve ter pelo menos 9 caracteres.")
              setErrorVisible(true);
              return;
            }

            // começando processo de cadastro
            try {
              const response = await signup(name, cpf, email, password);
              const user = response.data
              const result = response.status == 201

              if (!result) {
                setErrorMessage('Houve um erro no cadastro.')
                setErrorVisible(true);
                return;
              } else {
                // limpando todos os campos
                onChangePassword('');
                onChangeName('');
                onChangeEmail('');
                onChangeCpf('');
                setErrorMessage('');
                setErrorVisible(false);

                // navegando para a próxima página
                navigation.reset({
                  index: 1,
                  routes: [
                    { name: 'LoginScreen' },
                    { name: 'ContactList', params: { user } }
                  ]
                })
                return;
              }
            } catch (error) {
              setErrorMessage('Erro no cadastro:', error)
              console.log('Signup error:', error);
            }
          }
          }
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};

export default SignupScreen;