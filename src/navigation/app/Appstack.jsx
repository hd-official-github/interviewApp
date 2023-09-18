import { View, Text } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Home from '../../pages/Home'
import Details from '../../pages/Details'

export default function Appstack() {

    const Appstack = createStackNavigator()
    return (
        <Appstack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Appstack.Screen name="Home" component={Home} />
            <Appstack.Screen name="Details" component={Details} />
        </Appstack.Navigator>
    )
}