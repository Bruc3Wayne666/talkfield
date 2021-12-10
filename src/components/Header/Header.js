import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Header = props => {


    return (
        <View style={styles.header}>
            <Text style={styles.title}>TalkField</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30
    },
    title: {
        fontSize: 22,
        color: 'white',
        bottom: -8
    }
})