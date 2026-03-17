import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from '../components/ContactCard';
//import { contacts } from '../api/MockData';
import { getContacts } from '../api/contacts';
import { useEffect, useState } from 'react';

function ContactList({ route }) {
  const [contacts, setContacts] = useState([]);
  const { user } = route.params;
  const userId = user.id

  useEffect(() => {
    const fetchContacts = async () => {
      const user_id = userId; // Substitua pelo ID do usuário atual
      const hasContacts = await getContacts(user_id);
      console.log('Has contacts:', hasContacts);
      setContacts(hasContacts ? hasContacts : [])
      console.log(userId)
    };
    fetchContacts();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {userId ? (
          <Text>{userId}</Text>
        ): (null)}
        <Text>Hi {user.name}</Text>
        <View style={styles.cardContainer}>
          {contacts ? (contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              name={contact.name}
              number={contact.phone}
              email={contact.email}
            > </ContactCard>)
          )) : (
            <Text style={styles.errorText}>Nenhum contato encontrado.</Text>)}
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
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