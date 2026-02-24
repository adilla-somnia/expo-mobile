import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from '../components/ContactCard';
import { contacts } from '../api/MockData';

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