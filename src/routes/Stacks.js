import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "../pages/Home/Home";
import {Login} from "../pages/Login/Login";
import {Messages} from "../pages/Messages/Messages";
import {Profile} from "../pages/Profile/Profile";
import {Register} from "../pages/Register/Register";
import {SideDrawer} from "./Drawer";
import {AuthContext} from "../store/AuthContext";

const Stack = createStackNavigator()

export const DetailStack = () => {
    const {user} = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={user !== null ? 'Main' : 'Login'} screenOptions={screenOptionStyle} options={{headerShown:false}}>
            <Stack.Screen name={'Main'} component={SideDrawer}/>
            <Stack.Screen name={'Login'} component={Login}/>
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

