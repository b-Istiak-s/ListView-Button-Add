import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput,Button, Alert} from 'react-native';

export default function InputTodos({submitHandler}) {
    const [text,inputText] = useState('');

    const changeHandler = (val) =>{
            inputText(val);
    }
  return (
    <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={changeHandler} placeholder='Enter todos'/>
        <Button 
            onPress={()=>submitHandler(text)} 
            title="Submit"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin:15,
    },
    textInput:{
        marginBottom:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        paddingVertical:6,
        paddingHorizontal:8,
    }
});
