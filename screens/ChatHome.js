import { SafeAreaView } from "react-native-safe-area-context";
import { Surface, Avatar, Text, Icon, Divider } from 'react-native-paper';
import { useEffect } from "react";
import { StyleSheet, View, ScrollView, Pressable, Image, StatusBar } from "react-native";

export default function ChatHome({navigation}) {

    const chats = [
        {
            'id': 1, 'contact_name': 'Claudia Alves', 'messages': [
                { 'id': 1, 'message': 'Hey, how are you?', 'timestamp': '10:30 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'I am good, thanks! How about you?', 'timestamp': '10:32 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'Doing well! Are we still on for the meeting tomorrow?', 'timestamp': '10:35 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 4, 'message': 'Yes, looking forward to it!', 'timestamp': '10:37 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 5, 'message': 'Great! See you then.', 'timestamp': '10:40 AM', 'is_sent_by_user': false, 'read': false },
                { 'id': 6, 'message': 'Just a reminder', 'timestamp': '10:42 AM', 'is_sent_by_user': false, 'read': false },
                { 'id': 7, 'message': 'Make sure to bring the documents.', 'timestamp': '10:43 AM', 'is_sent_by_user': false, 'read': false }
            ], 'profile_photo': require('../assets/contact_1.jpg')
        },
        {
            'id': 2, 'contact_name': 'John Sanders', 'messages': [
                { 'id': 1, 'message': 'Hey, are you coming to the party tonight?', 'timestamp': '9:15 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'I am not sure yet. I have a lot of work to do.', 'timestamp': '9:17 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'I understand. Let me know if you can make it!', 'timestamp': '9:20 AM', 'is_sent_by_user': false, 'read': false }
            ], 'profile_photo': require('../assets/contact_2.jpg')
        },
        {
            'id': 3, 'contact_name': 'Sophia Hayes', 'messages': [
                { 'id': 1, 'message': 'Can you send me the report by the end of the day?', 'timestamp': '8:00 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'Sure, I will have it ready by 5 PM.', 'timestamp': '8:05 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'Thanks! Let me know if you need any help.', 'timestamp': '8:10 AM', 'is_sent_by_user': false, 'read': true }
            ], 'profile_photo': require('../assets/contact_3.jpg')
        },
        {
            'id': 4, 'contact_name': 'Emily Turner', 'messages': [
                { 'id': 1, 'message': 'Hey, how was your weekend?', 'timestamp': '7:30 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'It was great! I went hiking with some friends.', 'timestamp': '7:35 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'That sounds fun! I wish I could have joined.', 'timestamp': '7:40 AM', 'is_sent_by_user': false, 'read': true }
            ], 'profile_photo': require('../assets/contact_4.jpg')
        },
        {
            'id': 5, 'contact_name': 'Michael Brown', 'messages': [
                { 'id': 1, 'message': 'Hey, do you have any plans for the weekend?', 'timestamp': '6:00 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'Not yet. I was thinking of maybe going to the beach.', 'timestamp': '6:05 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'That sounds like a great idea! Let me know if you want to join.', 'timestamp': '6:10 AM', 'is_sent_by_user': false, 'read': true }
            ], 'profile_photo': require('../assets/contact_5.jpg')
        },
        {
            'id': 6, 'contact_name': 'Sarah Wilson', 'messages': [
                { 'id': 1, 'message': 'Hey, how are you doing?', 'timestamp': '5:00 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 2, 'message': 'I am doing well, thanks! How about you?', 'timestamp': '5:05 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 3, 'message': 'I am good too! Are you free for lunch tomorrow?', 'timestamp': '5:10 AM', 'is_sent_by_user': false, 'read': true },
                { 'id': 4, 'message': 'Yes, I am free. Let\'s meet at our usual spot.', 'timestamp': '5:15 AM', 'is_sent_by_user': true, 'read': true },
                { 'id': 5, 'message': 'Sounds good! See you tomorrow.', 'timestamp': '5:20 AM', 'is_sent_by_user': false, 'read': true }
            ], 'profile_photo': require('../assets/contact_6.jpg')
        }
    ]


    useEffect(() => {
        StatusBar.setBarStyle('light-content')
    }, [])

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../assets/chat_bg4.png')} style={thisStyle.backgroundImage} />
            <Surface style={thisStyle.header}>
                <SafeAreaView style={thisStyle.userHeader}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: '50%', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon source="email-plus" size={30} color='#3f60a0' />
                        </View>
                        <View>
                            <Text style={[thisStyle.textSecondary, { fontSize: 24, fontWeight: 300 }]}>Messages & Chat</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#3f60a0', height: 1, width: 180, alignSelf: 'flex-end' }} />
                </SafeAreaView>

            </Surface>

            <ScrollView style={{ marginBottom: 100, marginTop: 120 }}>
                <SafeAreaView style={thisStyle.chatsContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 400, paddingBottom: 15 }}>Mark all read</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 400, paddingBottom: 15 }}>Sort by time </Text>
                            <Icon source="menu-down" size={20} color='#5958b2' />
                        </View>
                    </View>
                    <View style={thisStyle.chats}>
                        {chats.map(c => {
                            const truncateMessage = (message) => {
                                return message.length > 36 ? message.substring(0, 33) + '...' : message;
                            }
                            const unreadMessages = c.messages.filter(m => !m.read).length
                            return (
                                <Pressable key={c.id} style={({ pressed }) => [thisStyle.chatCard, pressed && thisStyle.pressedItem]}>
                                    <Avatar.Image source={c.profile_photo} size={45} />
                                    <View style={{ gap: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{c.contact_name}</Text>
                                        <Text numberOfLines={2} style={{ color: 'grey', fontSize: 12 }}>{truncateMessage(c.messages[c.messages.length - 1].message)}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', top: 0, right: 0, position: 'absolute', padding: 10 }}>
                                        <Text style={{ color: 'grey', fontSize: 10 }}>{c.messages[c.messages.length - 1].timestamp}</Text>
                                        {!c.messages[c.messages.length - 1].read && <View style={{ backgroundColor: '#3f60a0', width: 17, height: 17, borderRadius: '50%', marginTop: 5, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{unreadMessages}</Text></View>}
                                    </View>
                                </Pressable>)
                        }
                        )}
                    </View>
                </SafeAreaView>
            </ScrollView >

            <Surface style={thisStyle.bottomAppbar}>

                <View style={thisStyle.bottomAppbarCol}>
                    <Icon source="home" color="#3f60a0" size={26} />
                    <Text style={thisStyle.textPrimary}>Home</Text>
                </View>
                <View style={[thisStyle.bottomAppbarCol, thisStyle.active]}>
                    <Icon source="chat" color="#3f60a0" size={26} />
                    <Text style={thisStyle.textPrimary}>Chat</Text>
                </View>
                <Pressable style={thisStyle.bottomAppbarCol} onPress={() => navigation.navigate('TravelHome')}>
                    <Icon source="bell-outline" color="#3f60a0" size={26} />
                    <Text style={thisStyle.textPrimary}>Mail</Text>
                </Pressable>
                <Pressable style={thisStyle.bottomAppbarCol} onPress={() => navigation.navigate('HomeNew')}>
                    <Icon source="account" color="#3f60a0" size={26} />
                    <Text style={thisStyle.textPrimary}>Profile</Text>
                </Pressable>

            </Surface>

        </SafeAreaView >
    )
}

const thisStyle = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 150,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
        backgroundColor: 'transparent'
    },
    userHeader: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        gap: 20
    },
    bottomAppbar: {
        backgroundColor: "white",
        bottom: 0,
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "space-between",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        borderTopEndRadius: 15,
        borderTopStartRadius: 15
    },
    bottomAppbarCol: {
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 5,
        paddingTop: 19
    },
    textPrimary: {
        color: "#3f60a0"
    },
    chatCard: {
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'flex-start',
        gap: 10,
        flexDirection: 'row',
        width: '105%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    chats: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    chatsContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    pressedItem: {
        transform: [{ translateY: -2 }],
    },
    iconCategory: {
        backgroundColor: '#5958b2',
        borderRadius: '50%',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        borderColor: '#3f60a0',
        borderTopWidth: 1,
    },
    textSecondary: {
        color: '#3b3b3b'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
        resizeMode: 'stretch',
        width: '100%',
    }
})