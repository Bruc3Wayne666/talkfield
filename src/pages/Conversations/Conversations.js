import React, {useContext, useEffect, useRef, useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {AuthContext} from "../../store/AuthContext";
import {io} from "socket.io-client";
import {getConversations} from "../../api/conversationAPI";
import {getOneUser} from "../../api/userAPI";

export const Conversations = ({navigation}) => {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const socket = useRef(io('ws://192.168.1.87:5001'))
    const {user} = useContext(AuthContext)
    const scrollRef = useRef()


    useEffect(() => {
        socket.current = io('ws://192.168.1.87:5001')
        socket.current.on('getMessage', ({senderId, text}) => {
            setArrivalMessage({
                sender: senderId,
                body: text,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        if (arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)) {
            setMessages(prev => [...prev, arrivalMessage])
        }
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit('addUser', user._id)
        socket.current.on('getUsers', users => {
            setOnlineUsers(user.following.filter(follower => users.some(user => user.userId === follower)))
        })
    }, [user])

    useEffect(() => {
        socket?.current.on('welcome', message => {
            console.log(message)
        })
    }, [socket])

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const res = await getConversations(user._id)
                setConversations(res)
            } catch (err) {
                console.log(err)
            }
        }
        fetchConversations()
    }, [user._id])
// Разобраться с асинхронкой чтобы вместо id выводить имя
    const getFriend = async friendId => {
        return await getOneUser(friendId)
    }


    return (
        <View style={styles.messengerContainer}>
            <ScrollView>
                {conversations.map(conversation => {
                    const friendId = conversation.members.find(member => member !== user._id)
                    return <View style={styles.conversation}>
                        <Pressable
                            onPress={() => navigation.push('Chat', {currentChat: conversation, currentUser: user._id})}>
                            <Text style={styles.conversationTitle}>{friendId}</Text>
                        </Pressable>
                    </View>
                })}
                {/*{conversations.map(conversation => (*/}
                {/*    <View style={styles.conversation}>*/}
                {/*        <Pressable onPress={() => navigation.push('Chat', {currentChat: conversation, currentUser: user._id})}>*/}
                {/*            <Text style={styles.conversationTitle}>{conversation._id}</Text>*/}
                {/*        </Pressable>*/}
                {/*    </View>*/}
                {/*))}*/}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    messengerContainer: {
        backgroundColor: '#2B2828FF',
        flex: 1,
        marginTop: 50
    },
    conversation: {
        height: 40,
        borderWidth: 2,
        borderColor: '#666666',
        borderRadius: 12
    },
    conversationTitle: {
        fontSize: 32,
        color: '#fff'
    }
})