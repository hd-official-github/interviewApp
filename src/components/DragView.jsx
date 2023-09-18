import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GridView from 'react-native-draggable-gridview'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
export default function DragView() {
    const navigation = useNavigation()
    const [data, setData] = useState([{
        key: 1,
        name: 'Property',
        icon: "house",
        navigate: "Details"
    },
    {
        key: 2,
        name: 'Land',
        icon: "landscape",
        navigate: "Details"
    },
    {
        key: 3,
        name: 'Office',
        icon: "apartment",
        navigate: "Details"
    },
    {
        key: 4,
        name: 'Hotel',
        icon: "hotel",
        navigate: "Details"
    },
    {
        key: 5,
        name: 'Tour bus',
        icon: "directions-bus",
        navigate: "Details"
    },
    {
        key: 6,
        name: 'Luxury Ride',
        icon: "directions-car",
        navigate: "Details"
    },
    {
        key: 7,
        name: 'Property 2',
        icon: "house",
        navigate: "Details"
    },
    {
        key: 8,
        name: 'Service Apartment',
        icon: "house"
    },])
    return <GridView
        data={data}
        numColumns={2}
        renderItem={(item) => (
            <View style={style.item} key={item.key} >
                <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={item.icon} size={35} color={"#159bf0"} />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )}
        keyExtractor={(item) => item.key}
        style={{ padding: 10 }}
        onReleaseCell={(items) => setData(items)}
    />
}
const style = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        alignItems: 'center',
        flex: 1,
        margin: 5,
        justifyContent: 'center'
    }
})