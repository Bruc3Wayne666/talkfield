import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "../pages/Home/Home";
import {Login} from "../pages/Login/Login";
import {Messages} from "../pages/Messages/Messages";
import {Profile} from "../pages/Profile/Profile";
import {Register} from "../pages/Register/Register";

const Stack = createStackNavigator()

export const DetailStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} options={{headerShown:false}}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Messages'} component={Messages} options={({route}) => ({title:route.params.task})}/>
            <Stack.Screen name={'Profile'} component={Profile}/>
            <Stack.Screen name={'Register'} component={Register}/>
        </Stack.Navigator>
    )
}

export const PageStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name={'Profile'} component={Profile}/>
        </Stack.Navigator>
    )
}

const screenOptionStyle = {
    headerShown: false,
    headerStyle: {
        backgroundColor: '#000'
    },
    headerTintColor: 'white',
    headerTintStyle: {
        fontWeight: 'bold'
    }
}

