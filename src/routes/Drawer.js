import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DetailStack, PageStack} from "./Stacks";
import {MyTab} from "./Tab";

const Drawer = createDrawerNavigator()
export const SideDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName={'Home'} options={{headerShown:false}}>
            <Drawer.Screen name={'Home'} component={MyTab} />
            <Drawer.Screen name={'Profile'} component={PageStack}/>
        </Drawer.Navigator>
    )
}
