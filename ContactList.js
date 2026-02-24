import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ContactCard from './ContactCard';
import { Ionicons } from '@expo/vector-icons';

const contacts = [
    {"id": 1,'full_name': 'Marcos Antonio', "email": "marcosdafonsenca@outlook.com", 'number': '81 99521-1253'},
    {"id": 2,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'},
    {"id": 3,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'},
    {"id": 4,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'},
    {"id": 5,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'},
    {"id": 6,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'}
]

function ContactList() {
    return(
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
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '60%',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    marginBottom: 15,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  header: {
    position: 'absolute',
    borderBottomColor: 'grey',
    borderWidth: 1,
    top: 0,
    width: '100%',
    textAlign: "center",
    fontSize: "120%",
    padding: 15,
    fontWeight: 'bolder',
    flexDirection: 'row',
    flex: 1
  },
  headerTitle: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  add: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ContactList;