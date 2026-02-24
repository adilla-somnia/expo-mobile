import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from '../components/ContactCard';

const contacts = [
  { "id": 1, 'full_name': 'Marcos Antonio', "email": "marcosdafonsenca@outlook.com", 'number': '81 99521-1253' },
  { "id": 2, 'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532' },
  { "id": 3, 'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532' },
  { "id": 4, 'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532' },
  { "id": 5, 'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532' },
  { "id": 6, 'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532' }
]

function ContactList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              name={contact.full_name}
              number={contact.number}
              email={contact.email}
            > </ContactCard>
          ))}
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