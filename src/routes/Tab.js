import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DetailStack, PageStack} from "./Stacks";
import {Conversations} from "../pages/Conversations/Conversations";
import {Login} from "../pages/Login/Login";
import {Profile} from "../pages/Profile/Profile";
import {Home} from "../pages/Home/Home";
import {Ionicons, MaterialCommunityIcons, Feather, EvilIcons} from "@expo/vector-icons";
import {MessengerStack} from "./MessengerStack";

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
            <Tab.Screen name={'MessengerStack'} component={MessengerStack} options={{
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