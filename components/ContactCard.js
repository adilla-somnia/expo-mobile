import { Text, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { formatPhoneNumber } from "../functions/Formatting";

function ContactCard({ id, name, number, email, user }) {
    const navigation = useNavigation();
    // Pressable navega para EditContact e traz as informações do contato, junto com o objeto user
    return (
        <Pressable style={styles.card}
            onPress={() => navigation.navigate('EditContact', { "cid": id, "full_name": name, "email": email, "number": number, user })}>
            <Ionicons name="person" color="#000" size={40} style={styles.user} />
            <View>
                <Text style={styles.info}>{name}</Text>
                <Text style={styles.info}>{formatPhoneNumber(number)}</Text>
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