import React, {useContext} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DetailStack, PageStack} from "./Stacks";
import {BottomTab} from "./Tab";
import {Profile} from "../pages/Profile/Profile";
import {Login} from "../pages/Login/Login";
import {Register} from "../pages/Register/Register";
import {AuthContext} from "../store/AuthContext";

const Drawer = createDrawerNavigator()
export const SideDrawer = () => {
    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#444444',
                width: 200,
            },
            drawerItemStyle: {
                backgroundColor: 'transparent'
            },
            drawerLabelStyle: {
                color: '#fff'
            }
        }}>
            <Drawer.Screen name={'Tabs'} component={BottomTab}/>
        </Drawer.Navigator>
        // <Drawer.Navigator initialRouteName={'Home'} options={{headerShown:false}}>
        //     <Drawer.Screen name={'Home'} component={MyTab} />
        //     <Drawer.Screen name={'Profile'} component={PageStack}/>
        // </Drawer.Navigator>
    )
}
