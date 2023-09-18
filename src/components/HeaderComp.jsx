import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import CategorySelector from './CategorySelector';

export default function HeaderComp() {
    const route = useRoute()
    const image = { uri: 'https://wl-img-prd.s3-accelerate.amazonaws.com/1ae6740d-1b5d-4132-9b97-1eba85fcc9e4-t.jpeg' };
    return (
        <ImageBackground source={image} resizeMode="contain" style={style.header} imageStyle=
            {{ opacity: 0.5 }}>
            <View style={style.menu}>
                <View style={style.iconBackground}>
                    <Icon name="menu" size={23} color="#fff" />
                </View>
                <View style={style.iconBackground2}>
                    <MIcon name="bell-alert-outline" size={23} color="#ccc" />
                </View>
            </View>
            {
                route.name == "Home" ? <View style={style.textarea}>
                    <Text style={style.text}>What are you looking for today ?</Text>
                </View> : <CategorySelector />
            }

        </ImageBackground>
    )
}

const style = StyleSheet.create({
    header: {
        height: 240,
        backgroundColor: "#c4c4c4",

    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    iconBackground: {
        backgroundColor: '#159bf0',
        padding: 10,
        borderRadius: 25
    },
    iconBackground2: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 25
    },
    textarea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})