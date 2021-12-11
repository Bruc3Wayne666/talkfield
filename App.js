import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {DetailStack, PageStack} from "./src/routes/Stacks";
import {SideDrawer} from "./src/routes/Drawer";
import {Profile} from "./src/pages/Profile/Profile";
import {BottomTab} from "./src/routes/Tab";
import {AuthContext, AuthContextProvider} from "./src/store/AuthContext";


export default function App() {
    const {user} = useContext(AuthContext)

    return (
        <AuthContextProvider>
            <NavigationContainer>
                {/*<SideDrawer />*/}
                <DetailStack/>
            </NavigationContainer>
            {/*<Profile/>*/}
        </AuthContextProvider>
        // <NavigationContainer>
        //   <SideDrawer/>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        color: '#fff'
    },
});
