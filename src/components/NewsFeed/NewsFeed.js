import React, {useEffect, useState} from "react";
import {getOneUser} from "../../api/userAPI";
import {Text, View, StyleSheet} from "react-native";


export const NewsFeed = props => {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     // const fetchUser = () => {
    //     getOneUser('613ca88c56d13f6f4ae62a31')
    //         .then(res => {
    //             console.log(res)
    //             setUser(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getOneUser('613ca88c56d13f6f4ae62a31')
            console.log(res)
            setUser(res)
        }
        fetchUser()
    }, [])

    return (
        <View>
            <Text style={styles.username}>{user?.username}</Text>
            <Text>{user?.desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    username: {
        fontSize: 34,
        color: '#222222'
    }
})