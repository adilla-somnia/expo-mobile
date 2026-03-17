import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from '../components/ContactCard';
//import { contacts } from '../api/MockData';
import { getContacts } from '../api/contacts';
import { useEffect, useState } from 'react';
import AddContactButton from '../components/AddContactButton';
import { styles } from '../style/styles';

function ContactList({ navigation, route }) {
  const [contacts, setContacts] = useState([]);
  const { user } = route.params;
  const userId = user.id

  // adicionando botão de navegação para AddContact levando junto o objeto user
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddContactButton user={user}
        />
      )
    })
  }, [navigation, userId])

  // trazendo os contatos do usuário logado
  useEffect(() => {
    const fetchContacts = async () => {
      const user_id = userId;
      const hasContacts = await getContacts(user_id);
      setContacts(hasContacts ? hasContacts : [])
    };
    fetchContacts();
  }, []);

  return (
    <ScrollView>
      <View style={local_style.container}>
        <View style={local_style.cardContainer}>
          {contacts.length > 0 ? (contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
              email={contact.email}
              user={user}
            > </ContactCard>)
          )) : (
            <Text style={styles.errorText}>Nenhum contato encontrado.</Text>)}
        </View>
      </View>
    </ScrollView>
  )
};

const local_style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
    height: '100%',
    display: 'contents'
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
});

export default ContactList;