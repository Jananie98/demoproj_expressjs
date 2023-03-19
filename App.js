import React from "react";
import { View, Text } from "react-native";
// import DatePicker from "./DatePicker";
import MyComponent from "./MyComponent";
// import {
//     enGB,
//     registerTranslation,
//   } from 'react-native-paper-dates'
//   registerTranslation('en-GB', enGB)

function App(){

    return (
        <View>
            <Text>Student Registration Form</Text>
            <MyComponent/>
        </View>
    )
}

export default App;