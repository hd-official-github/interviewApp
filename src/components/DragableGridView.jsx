import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
export default function DragableGridView() {
    const data = [
        {
            key: 1,
            name: 'Property',
            icon: "house"
        },
        {
            key: 2,
            name: 'Land',
            icon: "landscape"
        },
        {
            key: 3,
            name: 'Office',
            icon: "apartment"
        },
        {
            key: 4,
            name: 'Hotel',
            icon: "hotel"
        },
        {
            key: 5,
            name: 'Tour bus',
            icon: "directions-bus"
        },
        {
            key: 6,
            name: 'Luxury Ride',
            icon: "directions-car"
        },
        {
            key: 7,
            name: 'Property 2',
            icon: "house"
        },
        {
            key: 8,
            name: 'Service Apartment',
            icon: "house"
        },
    ]
    const [links, setLinks] = useState(data)

    const renderItem = ({ item, index, drag, isActive }) => {
        // console.log(item)
        return (
            <TouchableHighlight
                onPressIn={drag}
                underlayColor="transparent"
                style={[style.item, {
                    backgroundColor: isActive ? 'lightgray' : 'white',
                }]}
            >
                <View style={{ padding: 16, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={item.icon} size={35} color={"lightgray"} />
                    <Text style={style.text}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    return (
        <View style={style.container}>
            <DraggableFlatList
                data={links}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                onDragEnd={({ data }) => setLinks(data)}
                numColumns={2}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        flexDirection: 'row',
        width: '50%',
        padding: 16,
        margin: 5,
        backgroundColor: 'white',

    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
})