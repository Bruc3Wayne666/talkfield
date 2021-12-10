import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DetailStack, PageStack} from "./Stacks";

const Tab = createBottomTabNavigator()

export const MyTab = () => {
    return (
        <Tab.Navigator options={{headerShown:false}}>
            <Tab.Screen name={'Home'} component={DetailStack} />
            <Tab.Screen name={'Profile'} component={PageStack} />
        </Tab.Navigator>
    )
}