import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Conversations} from "../pages/Conversations/Conversations";
import {Chat} from "../components/Chat/Chat";


const Stack = createStackNavigator()

export const MessengerStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Conversations'}>
            <Stack.Screen name={'Conversations'} component={Conversations} options={{headerShown: false}}/>
            <Stack.Screen name={'Chat'} component={Chat}/>
        </Stack.Navigator>
    )
}