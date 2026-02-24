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
            <Text>{name}</Text>
            <Text>{number}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    width: "80%",
    borderRadius: 5,
    marginBottom: 30,
    alignItems: 'center',
    },
    user: {
    marginRight: 15,
    padding: 10
    }
});

export default ContactCard;