import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
import { View, Text, StyleSheet } from "react-native";
// import DatePicker from './DatePicker';


const MyComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");

  return (
    <View>
    
    <TextInput
      label="Student Name"
      value={name}
      onChangeText={name => setName(name)}
      mode='outlined'
    />

     <TextInput
      label="Student Address"
      value={address}
      onChangeText={address => setAddress(address)}
      mode='outlined'
    />

    <TextInput
      label="Selected Course"
      value={course}
      onChangeText={course => setCourse(course)}
      mode='outlined'
    />
    
    {/* <DatePicker/> */}

    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Register
    </Button>
   

    </View>

    
  );
};

export default MyComponent;


