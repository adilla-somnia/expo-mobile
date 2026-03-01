import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Searchbar, Surface, Avatar, Text, Icon } from 'react-native-paper';
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";


export default function HomeNew() {
    const [query, setQuery] = useState('');
    const [username, setUsername] = useState('user');

    useEffect(() => {
        setUsername('Michael Walker')
    })

    return (
        <SafeAreaView style={{width: "100%", height: "100%"}}>
            <Surface style={thisStyle.header}>
                <SafeAreaView style={thisStyle.userHeader}>
                    <Avatar.Image source={require('../assets/happy_traveler.png')} />
                    <Text style={{color: "white", fontWeight: "bold"}}>Welcome, {username}</Text>
                </SafeAreaView>
            <Searchbar style={{backgroundColor: "white", marginTop: 5, marginBottom: 10}} placeholder="Search doctor" value={query} onChangeText={setQuery} />
            </Surface>

            <Surface style={thisStyle.bottomAppbar}>
                
                <View style={thisStyle.bottomAppbarCol}>
                <Icon source="home" color="white" size={30} />
                <Text style={thisStyle.textWhite}>Home</Text>
                </View>

                <View style={thisStyle.bottomAppbarCol}>
                <Icon source="medical-bag" color="white" size={30} />
                <Text style={thisStyle.textWhite}>Doctors</Text>
                </View>
                <View style={thisStyle.bottomAppbarCol}>
                <Icon source="calendar" color="white" size={30} />
                <Text style={thisStyle.textWhite}>Appointments</Text>
                </View>
                <View style={thisStyle.bottomAppbarCol}>
                <Icon source="account" color="white" size={30} />
                <Text style={thisStyle.textWhite}>Account</Text>
                </View>
                
            </Surface>

        </SafeAreaView>
    )
}

const thisStyle = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: "#5b6bf5",
    },
    userHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginBottom: 10
    },
    bottomAppbar: {
        backgroundColor: "#5b6bf5",
        bottom: 0,
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: "row"
    },
    bottomAppbarCol: {
        alignItems: "center"
    },
    textWhite: {
        color: "white"
    }
})