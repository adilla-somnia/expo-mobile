import { Text, TextInput, Pressable, KeyboardAvoidingView, } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import { useState } from 'react';
import { addContact } from '../api/contacts';
import { isValidEmail, isValidPhone } from '../functions/Validation';

function AddContact({ navigation, route }) {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [number, onChangeNumber] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = route.params;
  const user_id = user.id;

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
          placeholder='(12) 3456-7890'
          placeholderTextColor="#999"
          value={number}
          onChangeText={onChangeNumber}
          keyboardType='numeric'
        />

        {errorVisible ? (
          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        ) : null}

        <Pressable style={[styles.button, { backgroundColor: '#1670f7', width: '80%', marginTop: 30 }]}

          onPress={async () => {
            setErrorMessage('');

            // validando se os inputs estão preenchidos
            if (!name || !number || !email) {
              setErrorVisible(true);
              setErrorMessage('Preencha todos os campos!')
              return;
            }

            // validando email
            if (!isValidEmail(email)) {
              setErrorMessage('Email inválido!');
              setErrorVisible(true);
              return;
            }

            // validando numero de telefone
            if (!isValidPhone(number)) {
              setErrorMessage('Telefone inválido!');
              setErrorVisible(true);
              return;
            }

            try {
              // limpando numero de telefone
              const cleaned_phone = number.replace(/[\s-()]/g, '')

              // criando objeto 'contato' com os campos e informações
              const newContact = {
                name,
                phone: cleaned_phone,
                email
              }

              // fazendo chamada request para adicionar contato à lista do user 
              const result = await addContact(user_id, newContact); //

              // 
              if (!result) {
                setErrorMessage('Erro ao adicionar contato.')
                setErrorVisible(true);
                return;
              } else {
                // limpando campos antes de prosseguir
                onChangeName('');
                onChangeEmail('');
                onChangeNumber('');
                setErrorVisible(false);

                // voltando para ContactList e limpando a stack
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
              console.log('Add contact error:', error);
              return;
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

export default AddContact;