import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Searchbar, Surface, Avatar, Text, Icon } from 'react-native-paper';
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView, Pressable, Image, StatusBar } from "react-native";


export default function HomeNew({navigation}) {
    const [query, setQuery] = useState('');
    const [username, setUsername] = useState('Michael Walker');

    const categories = [
        { 'id': 1, 'name': 'Consultation', 'icon': 'badge-account' },
        { 'id': 2, 'name': 'Dentist', 'icon': 'tooth-outline' },
        { 'id': 3, 'name': 'Cardiologist', 'icon': 'heart' },
        { 'id': 4, 'name': 'Hospital', 'icon': 'hospital-building' },
        { 'id': 5, 'name': 'Emergency', 'icon': 'ambulance' },
        { 'id': 6, 'name': 'Laboratory', 'icon': 'clipboard-pulse-outline' }
    ]

    const doctors = [
        { 'id': 1, 'name': 'Olivia Wilson', 'description': 'Consultant - Physiotherapy', 'review_score': 4.9, 'review_total': 57, 'profile_photo': require('../assets/doctor_2.jpg') },
        { 'id': 2, 'name': 'Jonathan Patterson', 'description': 'Consultant - Internal Medicine', 'review_score': 4.9, 'review_total': 37, 'profile_photo': require('../assets/doctor_1.png') },
        { 'id': 3, 'name': 'Patrick Truman', 'description': 'Consultant - Psychology', 'review_score': 4.8, 'review_total': 112, 'profile_photo': require('../assets/doctor_3.jpg') }
    ]



    useEffect(() => {
        StatusBar.setBarStyle('light-content')
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f6ff' }}>
            <Surface style={thisStyle.header}>
                <SafeAreaView style={thisStyle.userHeader}>
                    <Avatar.Image source={require('../assets/happy_traveler.png')} />
                    <Text style={{ color: "white", fontWeight: "bold" }}>Welcome, {username}</Text>
                </SafeAreaView>
                <Searchbar style={{ backgroundColor: "white", marginTop: 5, marginBottom: 10 }} placeholder="Search doctor" value={query} onChangeText={setQuery} />
            </Surface>

            <ScrollView style={{ marginBottom: 100, marginTop: 180 }}>
                <SafeAreaView style={thisStyle.categoriesContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 15 }}>Categories</Text>
                        <Text style={{ fontWeight: 'bold' }} > Show All</Text>
                    </View>
                    <View style={thisStyle.categories}>
                        {categories.map(c => (
                            <Pressable key={c.id} style={({ pressed }) => [thisStyle.categoryItem, pressed && thisStyle.pressedItem]}>
                                <Icon source={c.icon} size={30} />
                                <Text>{c.name}</Text>
                            </Pressable>
                        ))}
                    </View>
                </SafeAreaView>

                <SafeAreaView style={thisStyle.categoriesContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 15 }}>Top Doctors</Text>
                    </View>

                    <View>
                        {doctors.map(d => (
                            <Pressable key={d.id} style={thisStyle.doctorItem}>
                                <Avatar.Image source={d.profile_photo} />
                                <View style={{ gap: 5 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>dr. {d.name}</Text>
                                    <Text>{d.description}</Text>
                                    <Text style={{ color: 'grey', fontSize: 12 }}><Icon source="star" color='orange' size={15} />{d.review_score} ({d.review_total} Reviews)</Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView >






            <Surface style={thisStyle.bottomAppbar}>

                <View style={thisStyle.bottomAppbarCol}>
                    <Icon source="home" color="white" size={30} />
                    <Text style={thisStyle.textWhite}>Home</Text>
                </View>

                <View style={thisStyle.bottomAppbarCol}>
                    <Icon source="medical-bag" color="white" size={30} />
                    <Text style={thisStyle.textWhite}>Doctors</Text>
                </View>
                <Pressable style={thisStyle.bottomAppbarCol}  onPress={() => navigation.navigate('ChatHome')}>
                    <Icon source="calendar" color="white" size={30} />
                    <Text style={thisStyle.textWhite}>Appointments</Text>
                </Pressable>
                <Pressable style={thisStyle.bottomAppbarCol} onPress={() => navigation.navigate('TravelHome')} >
                    <Icon source="account" color="white" size={30}  />
                    <Text style={thisStyle.textWhite}>Account</Text>
                </Pressable>

            </Surface>

        </SafeAreaView >
    )
}

const thisStyle = StyleSheet.create({
    header: {
        backgroundColor: "#5b6bf5",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 200,
        justifyContent: 'center',
        padding: 10
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
    },
    categoryItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        borderRadius: 5,
        shadowOffset: { width: 3, height: 2 },
        shadowColor: 'grey',
        shadowOpacity: 0.3
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    categoriesContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    pressedItem: {
        backgroundColor: '#fafafa',
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 2 }

    },
    doctorItem: {
        backgroundColor: 'white',
        margin: 5,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        gap: 10
    }
})