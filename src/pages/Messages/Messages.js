import React from "react";
import {Button, Text, View} from "react-native";
import {Header} from "../../components/Header/Header";

export const Messages = ({navigation, route}) => {
    const handlePop = () => {
        navigation.pop()
    }

    const handlePush = () => {
        navigation.push('Profile')
    }

    return (
        <View>
            <Text>Messages</Text>
            {/*{route && <>*/}
            {/*    <Text>{route.params.id}</Text>*/}
            {/*    <Text>{route.params.task}</Text>*/}
            {/*    <Text>{String(route.params.done)}</Text>*/}
            {/*</>}*/}
            {/*<Button title={'Go Home!'} onPress={handlePop}/>*/}
            {/*<Button title={'Profile'} onPress={handlePush}/>*/}
        </View>
    )
}