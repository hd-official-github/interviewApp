import { View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderComp from '../components/HeaderComp'
import { TextInput, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';

export default function Details() {
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [propTypes, setPropTypes] = useState([
        {
            id: 1,
            icon: <Icon name="home" color="#159bf0" size={30} />,
            name: "House"
        },
        {
            id: 2,
            icon: <Fontisto name="holiday-village" color="#159bf0" size={30} />,
            name: "House/Villa"
        },
        {
            id: 3,
            icon: <MaterialIcons name="apartment" color="#159bf0" size={30} />,
            name: "Office"
        },
        {
            id: 4,
            icon: <Fontisto name="shopping-store" color="#159bf0" size={30} />,
            name: "Shop"
        },

    ])
    const bedroomtypes = ["1bhk", "2bhk", "3bhk", "4bhk", ">4bhk"]
    const [selectedRoom, setSelectedROom] = useState("")
    const Budget = ["< 100,000", "200,000", "500,000", "> 1M"]
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComp />
            <ScrollView style={{ padding: 10, paddingHorizontal: 20, backgroundColor: "#fff", }}>
                <Text variant="titleMedium" >Locality/Landmark</Text>
                <TextInput
                    style={{ marginVertical: 10, backgroundColor: 'none' }}
                    label={isFocused ? '' : "Search a city, locality or Landmark"}
                    value={text}
                    onChangeText={text => setText(text)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <Text variant="titleMedium" style={{ marginBottom: 10 }}>Property Type</Text>


                <View style={styles.buttonContainer}>
                    {
                        propTypes.map(i => {
                            return <TouchableOpacity key={i.id} style={[styles.button, type == i.name ? styles.selectedBtn : null]} onPress={() => setType(i.name)}>
                                {i.icon}
                                <Text style={styles.text}>{i.name}</Text>
                            </TouchableOpacity>
                        })
                    }
                </View>

                <Text variant="titleMedium" style={{ marginVertical: 10 }}>Budget</Text>

                <View style={styles.budgetContainer}>
                    <SelectDropdown

                        data={Budget}
                        renderDropdownIcon={() => <Icon name='down' size={14} />}
                        renderSearchInputLeftIcon={() => <MaterialIcons name='currency-rupee' size={14} />}
                        dropdownOverlayColor='none'
                        buttonTextStyle={{ fontSize: 14 }}
                        buttonStyle={{ backgroundColor: "#fff", borderWidth: 2, borderColor: "#159bf0", borderRadius: 10, flex: 1, margin: 4 }}
                        defaultButtonText='Select Minimum'
                        rowTextStyle={{ fontSize: 14 }}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                    <SelectDropdown
                        data={Budget}
                        renderDropdownIcon={() => <Icon name='down' size={14} />}
                        renderSearchInputLeftIcon={() => <MaterialIcons name='currency-rupee' size={14} />}
                        buttonTextStyle={{ fontSize: 14 }}
                        buttonStyle={{ backgroundColor: "#fff", borderWidth: 2, borderColor: "#159bf0", borderRadius: 10, flex: 1, margin: 4 }}
                        dropdownOverlayColor='none'
                        defaultButtonText='Select Maximum'
                        rowTextStyle={{ fontSize: 14 }}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View>

                <Text variant="titleMedium" style={{ marginVertical: 10 }}>Bedrooms</Text>
                <View style={styles.buttonContainer}>
                    {
                        bedroomtypes.map((i, index) => {
                            return <TouchableOpacity key={index} style={[styles.button, { height: 40, padding: 0 }, selectedRoom == i && styles.selectedBtn]} onPress={() => setSelectedROom(i)}>
                                <Text style={[styles.text, { paddingTop: 0 }]}>{i}</Text>
                            </TouchableOpacity>
                        })
                    }
                </View>
                {/* Empty Space at bottom */}
                <View style={{ height: 100 }}></View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        borderWidth: 2,
        borderColor: "#159bf0",
        justifyContent: 'center',
        alignItems: 'center',
        // width: 100,
        flex: 1,
        margin: 5,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 10
    },
    selectedBtn: { backgroundColor: "#b9e2f8" },
    text: {
        paddingTop: 10,
        textAlign: 'center'
    },
    budgetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})