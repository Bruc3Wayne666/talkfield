import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {DetailStack, PageStack} from "./src/routes/Stacks";
import {SideDrawer} from "./src/routes/Drawer";
import {Profile} from "./src/pages/Profile/Profile";


export default function App() {
  return (
        <Profile/>
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
