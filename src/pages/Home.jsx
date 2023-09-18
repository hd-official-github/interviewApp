import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../components/HeaderComp'
// import DragableGridView from '../components/DragableGridView'
import DragView from '../components/DragView'

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComp />
      <DragView />
    </View>
  )
}