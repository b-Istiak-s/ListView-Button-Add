import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,TextInput,Button, Alert,MaterialIcons} from 'react-native';

export default function InputTodos({submitHandler}) {
    const [text,inputText] = useState('');

    const changeHandler = (val) =>{
            inputText(val);
    }
  return (
    <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={(item)=>item.id}
          data={Todos}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                <MaterialIcons name='delete' size='18' color='#333'/>
              <Text style={styles.item}> {item.name}</Text>
            </TouchableOpacity>
          )}
        />
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
