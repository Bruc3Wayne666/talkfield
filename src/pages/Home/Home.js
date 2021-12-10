import React, {useState} from "react";
import {Button, FlatList, Text, TouchableOpacity, View} from "react-native";
import {NewsFeed} from "../../components/NewsFeed/NewsFeed";
import {Header} from "../../components/Header/Header";

export const Home = ({navigation}) => {
    const [tasks, setTasks] = useState([
        {task: 'backend', done: true, id: 1},
        {task: 'frontend', done: true, id: 2},
        {task: 'websocket', done: true, id: 3}
    ])

    const handlePress = () => {
        navigation.push('Messages')
    }

    return (
        <View>
            <NewsFeed/>
            <Button title={'Messages'} onPress={handlePress}/>
            <FlatList data={tasks}
                      renderItem={({item})=>(
                          <TouchableOpacity onPress={()=>navigation.navigate("Messages",item)}>
                              <Text>{item.task}</Text>
                          </TouchableOpacity>
                      )}/>
        </View>
    )
}