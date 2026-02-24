import { Text, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function ContactCard({name, number, email}) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.card}
        onPress={() => navigation.navigate('EditContact', {"full_name": name, "email": email, "number": number} )}>
            <Ionicons name="person" color="#000" size={40} style={styles.user} />
            <View>
            <Text style={styles.info}>{name}</Text>
            <Text style={styles.info}>{number}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
    padding: 15,
    width: "90%",
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 5
    },
    user: {
    marginRight: 15,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: '50%'
    },
    info: {
        fontSize: 30
    }
});

export default ContactCard;