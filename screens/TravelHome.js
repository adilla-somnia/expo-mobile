import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Searchbar, Surface, Avatar, Text, Icon } from 'react-native-paper';
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView, Pressable, Image, StatusBar } from "react-native";
import { EvilIcons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function TravelHome({navigation}) {
    const [query, setQuery] = useState('');
    const [username, setUsername] = useState('Michael Walker');

    const categories = [
        { 'id': 1, 'name': 'Resort', 'icon': require('../assets/resort.png') },
        { 'id': 2, 'name': 'Homestay', 'icon': require('../assets/homestay.png') },
        { 'id': 3, 'name': 'Hotel', 'icon': require('../assets/hotel.png') },
        { 'id': 4, 'name': 'Lodge', 'icon': require('../assets/lodge.png') },
        { 'id': 5, 'name': 'Villa', 'icon': require('../assets/villa.png') },
        { 'id': 6, 'name': 'Apartment', 'icon': require('../assets/apartments.png') },
        { 'id': 7, 'name': 'Hostel', 'icon': require('../assets/hostel.png') },
        { 'id': 8, 'name': 'See all', 'icon': require('../assets/apps.png') }
    ]

    const destinations = [
        { 'id': 1, 'image': require('../assets/destination_1.png') },
        { 'id': 2, 'image': require('../assets/destination_2.png') },
        { 'id': 3, 'image': require('../assets/destination_3.png') },
    ]

    const recommendations = [
        { 'id': 1, 'image': require('../assets/recommendation_1.png') },
        { 'id': 2, 'image': require('../assets/recommendation_2.png') },
        { 'id': 3, 'image': require('../assets/recommendation_3.png') },
        { 'id': 4, 'image': require('../assets/recommendation_4.png') },
    ]


    useEffect(() => {
        StatusBar.setBarStyle('light-content')
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eeeeee' }}>
            <Surface style={thisStyle.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
                    <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50 }} />
                    <Searchbar style={{ backgroundColor: "white", width: 250, borderRadius: 15 }} color='grey' placeholder="Search here..." value={query} onChangeText={setQuery} />
                </View>
                <SafeAreaView style={thisStyle.userHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Avatar.Image source={require('../assets/happy_traveler.png')} />
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Welcome!</Text>
                            <Text style={{ color: "white" }}>{username}</Text>
                        </View>
                    </View>
                    <Icon source='bell-badge-outline' size={30} color='white' />
                </SafeAreaView>

            </Surface>

            <ScrollView style={{ marginBottom: 100, marginTop: 180 }}>
                <SafeAreaView style={thisStyle.categoriesContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 15 }}>Category</Text>
                        <Icon source="menu" size={30} color='#5958b2' />
                    </View>
                    <View style={thisStyle.categories}>
                        {categories.map(c => (
                            <Pressable key={c.id} style={({ pressed }) => [thisStyle.categoryItem, pressed && thisStyle.pressedItem]}>
                                <View style={thisStyle.iconCategory}>
                                    <Image source={c.icon} style={{ width: 30, height: 30 }} />
                                </View>
                                <Text>{c.name}</Text>
                            </Pressable>
                        ))}
                    </View>
                </SafeAreaView>

                <SafeAreaView style={thisStyle.categoriesContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 15 }}>Popular Destination</Text>
                        <Icon source="menu" size={30} color='#5958b2' />
                    </View>

                    <View style={thisStyle.destinationContainer}>
                        {destinations.map(d => (
                            <Pressable key={d.id} style={thisStyle.destinationItem}>
                                <Image source={d.image} style={{ width: 100, height: 100, borderRadius: 15 }} />
                            </Pressable>
                        ))}
                    </View>
                </SafeAreaView>

                <SafeAreaView style={thisStyle.categoriesContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 15 }}>Recommended</Text>
                    </View>

                    <View style={thisStyle.destinationContainer}>
                        {recommendations.map(d => (
                            <Pressable key={d.id} style={thisStyle.destinationItem}>
                                <Image source={d.image} style={{ width: 150, height: 150, borderRadius: 15 }} />
                            </Pressable>
                        ))}
                    </View>
                </SafeAreaView>

            </ScrollView >

            <Surface style={thisStyle.bottomAppbar}>

                <View style={thisStyle.bottomAppbarCol}>
                    <Icon source="home" color="orange" size={30} />
                    <Text style={thisStyle.textWhite}>Home</Text>
                </View>

                <View style={thisStyle.bottomAppbarCol}>
                    <MaterialIcons name="explore" color="white" size={30} />
                    <Text style={thisStyle.textWhite}>Explore</Text>
                </View>
                <Pressable style={thisStyle.bottomAppbarCol} onPress={() => navigation.navigate('HomeNew')}>
                    <EvilIcons name="search" color="white" size={36} />
                    <Text style={thisStyle.textWhite}>Search</Text>
                </Pressable>
                <Pressable style={thisStyle.bottomAppbarCol}>
                    <MaterialCommunityIcons name="account-circle" color="white" size={30} onPress={() => navigation.navigate('ChatHome')} />
                    <Text style={thisStyle.textWhite}>Profile</Text>
                </Pressable>

            </Surface>

        </SafeAreaView >
    )
}

const thisStyle = StyleSheet.create({
    header: {
        backgroundColor: "#5958b2",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 210,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30
    },
    userHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20
    },
    bottomAppbar: {
        backgroundColor: "#5958b2",
        bottom: 0,
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "space-between",
        paddingLeft: 25,
        paddingRight: 25,
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
        margin: 5,
        width: 70,
        height: 70,
        justifyContent: 'center'
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
        transform: [{ translateY: -2 }],
    },
    destinationItem: {
        margin: 5
    },
    iconCategory: {
        backgroundColor: '#5958b2',
        borderRadius: '50%',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    destinationContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})