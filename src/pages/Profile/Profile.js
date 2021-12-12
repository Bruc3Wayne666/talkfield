import React, {useContext, useEffect, useState} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {Header} from "../../components/Header/Header";
import {getOneUser} from "../../api/userAPI";
import unknown from '../../../assets/unknown-512.webp'
import {getUserPosts} from "../../api/postAPI";
import {Ionicons} from "@expo/vector-icons";
import {BottomTab} from "../../routes/Tab";
import {SideDrawer} from "../../routes/Drawer";
import {AuthContext} from "../../store/AuthContext";

export const Profile = ({navigation}) => {
    // USE STORE THEN!!!!
    const {user} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    console.log('------------------------', user)


    useEffect(() => {
        navigation.addListener('focus', async () => {
            const res = await getUserPosts(user?._id)
            setPosts(res)
            // posts?.map(post => {
            //     console.log(post?.img)
            // })
        })
    }, navigation)

    // useEffect(() => {
    //     if (user) {
    //         console.log(user)
    //     } else {
    //         console.log('LOL')
    //     }
    //
    //     const fetchPosts = async () => {
    //         const res = await getUserPosts(user?._id)
    //         // console.log(res)
    //         setPosts(res)
    //     }
    //     fetchPosts()
    //     posts?.map(post => {
    //         console.log(post?.img)
    //     })
    // }, [])

    return (
        <View style={styles.profileContainer}>
            <View style={styles.infoContainer}>
                <View style={{flex: 3}}>
                    <Image style={styles.avatar} source={user?.profileImage || unknown}/>
                </View>
                <View style={{flex: 5}}>
                    <Text style={styles.username}>{user?.username}</Text>
                    <Text style={styles.description}>{user?.desc}</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView>
                    {posts?.reverse().map(post => (
                        <View style={styles.postContainer} key={post?._id}>
                            <View style={styles.postDescContainer}>
                                <Text style={styles.postDesc}>{post?.desc}</Text>
                            </View>
                            {post?.img
                            && <Image style={styles.postImage}
                                      source={{uri: `http://192.168.1.87:5000/images/${post?.img}`} || unknown}/>
                            }
                            <View style={styles.postActions}>
                                <Ionicons name={'heart'} size={22} color={'red'}/>
                                <Text style={styles.postActionsDesc}>{post?.likes?.length} likes</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            {/*<BottomTab />*/}
        </View>
    )
}

const styles = {
    profileContainer: {
        backgroundColor: '#222222',
        flex: 1,
        // borderWidth: 8,
        // borderColor: 'red'
    },
    avatar: {
        width: 120,
        height: 120
    },
    infoContainer: {
        marginTop: 40,
        color: '#fff',
        flexDirection: 'row',
        // borderColor: '#000',
        // borderWidth: 4,
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    username: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    description: {
        color: '#fff',
        fontSize: 20,
    },
    contentContainer: {
        // borderColor: 'green',
        // borderWidth: 2
    },
    postContainer: {
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.12,
        // shadowRadius: 2.22,
        // elevation: 1,
        backgroundColor: '#2B2828FF',
        borderRadius: 16,
        marginBottom: 6
    },
    postDesc: {
        color: '#fff',
    },
    postDescContainer: {
        marginLeft: 20,
        marginTop: 10
    },
    postImage: {
        marginTop: 6,
        width: 370,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 4
    },
    postActions: {
        flexDirection: 'row',
        height: 30,
        marginLeft: 20,
        marginTop: 10
        // borderTopWidth: 2,
        // borderTopColor: '#888888'
    },
    postActionsDesc: {
        color: '#666666',
        fontSize: 14
    }
}