import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactCard from './ContactCard';
import { Ionicons } from '@expo/vector-icons';

const contacts = [
    {"id": 1,'full_name': 'Marcos Antonio', "email": "marcosdafonsenca@outlook.com", 'number': '81 99521-1253'},
    {"id": 2,'full_name': 'Joana da Silva', "email": "joanasil33@gmail.com", 'number': '85 9331-3532'}
]

function ContactList({navigation}) {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Lista de Contatos</Text>
                <Ionicons name="add" color="#000" size={35} style={styles.add}
                onPress={() => navigation.navigate('AddContact')} />
            </View>

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
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%'
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