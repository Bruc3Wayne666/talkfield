import React, {useContext, useEffect, useRef, useState} from "react";
import {Alert, Pressable, Text, View} from "react-native";
import {StyleSheet, TextInput} from "react-native";
import {loginCall} from "../../api/authAPI";
import {AuthContext} from "../../store/AuthContext";

export const Login = ({navigation}) => {
    // хук useRef бл не работает
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleLogin = async () => {
        loginCall({email, password}, dispatch)
            .then(res => {
                res !== null
                    ? navigation.navigate('Main')
                    : Alert.alert('Wrong credentials - try again')
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>TalkF!eld</Text>
                </View>
                {/*<View>*/}
                {/*    <Text></Text>*/}
                {/*</View>*/}
            </View>
            <View>
                <View style={styles.loginContainer}>
                    <View>
                        <TextInput onChangeText={text => {
                            setEmail(text)
                        }} style={styles.input} placeholderTextColor={'#666666'}
                                   placeholder={'Email'}/>
                        <TextInput onChangeText={text => {
                            setPassword(text)
                        }} style={styles.input} placeholderTextColor={'#666666'}
                                   placeholder={'Password'} secureTextEntry={true}/>
                    </View>
                    <Pressable style={styles.loginBtn} onPress={handleLogin}>
                        <Text style={styles.loginTitle}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B2828FF',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30
    },
    title: {
        color: '#fff',
        fontSize: 44,
        fontWeight: 'bold'
    },
    titleContainer: {
        marginBottom: 240
    },
    loginContainer: {
        // borderWidth: 2,
        // borderColor: '#fff',
        height: 400,
        width: 300
    },
    input: {
        height: 60,
        width: 300,
        backgroundColor: "#222222",
        color: '#fff',
        fontSize: 20,
        paddingLeft: 12,
        borderRadius: 12,
        marginBottom: 30
    },
    loginBtn: {
        height: 80,
        width: 300,
        backgroundColor: '#AAFF00',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})