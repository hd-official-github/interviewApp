import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { SegmentedButtons } from 'react-native-paper';
const checkedStyle = { backgroundColor: '#159bf0', color: "#fff" ,borderColor:"#159bf0",borderWidth:2,fontSize:14}; // Change to your desired checked background color
const uncheckedStyle = { color: '#000', backgroundColor: "#f1f1f1", opacity: 0.9 ,borderColor:"#159bf0",borderWidth:2,fontSize:14};
export default function CategorySelector() {
    const [value, setValue] = React.useState('');
    return (
        <View styl={style.container}>
            <SegmentedButtons
                style={{ margin: 10,marginTop:30, borderRadius: 0, }}
                value={value}
                onValueChange={setValue}
                buttons={[
                    { value: 'BUY', label: 'BUYING', style: value == "BUY" ? checkedStyle : uncheckedStyle ,checkedColor:"#fff"},
                    { value: 'RENT', label: 'RENTING', style: value == "RENT" ? checkedStyle : uncheckedStyle ,checkedColor:"#fff"},
                    { value: 'LAND', label: 'LAND', style: value == "LAND" ? checkedStyle : uncheckedStyle ,checkedColor:"#fff"},
                    { value: 'OFFICE', label: 'OFFICE', style: value == "OFFICE" ? checkedStyle : uncheckedStyle ,checkedColor:"#fff"},

                ]}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        margin: 20
    }
})