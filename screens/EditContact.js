import { View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import { useEffect, useState } from 'react';
import { updateContact, deleteContact } from '../api/contacts';
import { isValidEmail, isValidPhone, cleanPhoneNumber } from '../functions/Validation';

function EditContact({ navigation, route }) {
  const { cid, full_name, email, number, user } = route.params;
  const user_id = user.id
  const [cname, onChangeCname] = useState(full_name);
  const [cemail, onChangeCemail] = useState(email);
  const [cnumber, onChangeCnumber] = useState(number);
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
          placeholder='nome completo...'
          value={cname}
          onChangeText={onChangeCname}
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='usuario@outlook.com'
          value={cemail}
          onChangeText={onChangeCemail}
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Número</Text>
        <TextInput style={styles.input}
          placeholder='número...'
          value={cnumber}
          onChangeText={onChangeCnumber}
          placeholderTextColor="#999"
          keyboardType='numeric'
        />

        {errorVisible ? (
          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        ) : null}

        <View style={[styles.buttonContainer, { marginTop: -20 }]}>
          <Pressable style={[styles.button, { backgroundColor: '#1670f7' }]}
            onPress={async () => {

              // validando se os inputs estão preenchidos
              if (!cname || !cnumber || !cemail) {
                setErrorVisible(true);
                setErrorMessage('Preencha todos os campos!')
                return;
              }

              // verificando se o email é válido
              if (!isValidEmail(cemail)) {
                setErrorMessage('Email inválido!');
                setErrorVisible(true);
                return;
              }

              // verificando se o número é válido
              if (!isValidPhone(cnumber)) {
                setErrorMessage('Telefone inválido!');
                setErrorVisible(true);
                return;
              }

              try {
                // limpando numero
                const clean_phone = cleanPhoneNumber(cnumber)
                // criando objeto contato com novas informações
                const newContact = { id: cid, name: cname, email: cemail, phone: clean_phone }
                // fazendo request para atualizar o contato
                const result = await updateContact(user_id, newContact)

                if (result.statusText === 'OK') {
                  setErrorMessage('')
                  setErrorVisible(false)

                  navigation.reset({
                    index: 1,
                    routes: [
                      { name: 'LoginScreen' },
                      { name: 'ContactList', params: { user } }
                    ]
                  })
                  return;
                } else {
                  setErrorMessage('Erro! Status:', result.status, result.statusText)
                  setErrorVisible(true)
                  return;
                }
              } catch (error) {
                setErrorVisible(true);
                setErrorMessage('Erro ao atualizar usuário:', error)
                console.log('Add contact error:', error);
                return;
              }
            }}
          >
            <Text style={styles.buttonText}>Alterar</Text>
          </Pressable>

          <Pressable style={[styles.button, { backgroundColor: '#FF1616' }]}
            onPress={async () => {
              try {
                // fazendo request para deletar o contato
                const result = await deleteContact(user_id, cid)

                if (result.statusText === 'OK') {
                  setErrorMessage('')
                  setErrorVisible(false)

                  navigation.reset({
                    index: 1,
                    routes: [
                      { name: 'LoginScreen' },
                      { name: 'ContactList', params: { user } }
                    ]
                  })
                  return;

                } else {
                  setErrorMessage('Erro! Status:', result.status, result.statusText)
                  setErrorVisible(true)
                  return;
                }
              } catch (error) {
                setErrorVisible(true);
                setErrorMessage('Erro ao deletar usuário:', error)
                console.log('Delete contact error:', error);
                return;
              }
            }}
          >
            <Text style={styles.buttonText}>Excluir</Text>
          </Pressable>
        </View>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};

export default EditContact;