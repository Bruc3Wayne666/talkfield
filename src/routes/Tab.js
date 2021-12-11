import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DetailStack, PageStack} from "./Stacks";
import {Messages} from "../pages/Messages/Messages";
import {Login} from "../pages/Login/Login";
import {Profile} from "../pages/Profile/Profile";
import {Home} from "../pages/Home/Home";
import {Ionicons, MaterialCommunityIcons, Feather, EvilIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 56,
                backgroundColor: '#2B2828FF'
            }
        }} >
            <Tab.Screen name={'Home'} component={Home} options={{
                tabBarIcon: () => (<Feather name={'home'} color={'#888888'} size={34}/>)
            }}/>
            <Tab.Screen name={'Messages'} component={Messages} options={{
                tabBarIcon: () => (<Feather name={'message-circle'} color={'#888888'} size={34}/>)
            }}/>
            <Tab.Screen name={'Profile'} component={Profile} options={{
                tabBarIcon: () => (<Feather name={'user'} color={'#888888'} size={34}/>)
            }}/>
            {/*<Tab.Screen name={'Login'} component={Login}/>*/}
        </Tab.Navigator>
        // <Tab.Navigator options={{headerShown:false}}>
        //     <Tab.Screen name={'Home'} component={DetailStack} />
        //     <Tab.Screen name={'Profile'} component={PageStack} />
        // </Tab.Navigator>
    )
}