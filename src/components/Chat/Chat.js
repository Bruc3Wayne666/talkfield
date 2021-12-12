import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {getOneUser} from "../../api/userAPI";
import {getMessages, sendMessage} from "../../api/messageAPI";
import {getConversations} from "../../api/conversationAPI";

export const Chat = ({navigation, route}) => {
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState(null)
    const [newMessage, setNewMessage] = useState('')
    const {currentUser} = route.params
    const {currentChat} = route.params

    // useEffect(() => {
    //     const friendId = currentChat.members.find(member => member !== currentUser)
    //
    //     const fetchUser = async () => {
    //         try {
    //             const res = await getOneUser(friendId)
    //             setUser(res)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchUser()
    // }, [currentUser, currentChat])

    useEffect(() => {
        navigation.addListener('focus', async () => {
            const friendId = currentChat.members.find(member => member !== currentUser)
            const res = await getOneUser(friendId)
            setUser(res)
        })
    }, [currentUser, currentChat])

    useEffect(() => {
        navigation.addListener('focus', async () => {
            const res = await getMessages(currentChat?._id)
            setMessages(res)
        })
    }, [currentChat])

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         try {
    //             const res = await getMessages(currentChat?._id)
    //             setMessages(res)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchMessages()
    // }, [currentChat])

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    // }, [messages])

    const handleSubmit = async () => {
        const message = {
            userId: user._id,
            body: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== user._id)

        try {
            const res = await sendMessage(message)
            socket.current.emit('sendMessage', {
                senderId: user._id,
                receiverId,
                text: newMessage
            })
            setMessages([...message, res])
            setNewMessage('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.chatContainer}>
            {/*<Text style={styles.title}>OLOLOLOLOL</Text>*/}
            <Text style={styles.title}>{user?.username}</Text>
            <ScrollView>
                {messages?.map(message => (
                    <View style={styles.message}>
                        <Text style={styles.messageText}>{message.body}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        backgroundColor: '#2B2828FF',
        flex: 1
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    message: {
        borderWidth: 2,
        borderColor: '#666',
        borderRadius: 12
    },
    messageText: {
        fontSize: 32,
        color: '#fff'
    }
})