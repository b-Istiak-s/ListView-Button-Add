import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/Header';
import InputTodos from './components/Input';
import dataFlatList from './components/data';

export default function App() {
  // array of all todos
  const [Todos, setTodos] = useState([
    {name:'blah1',id : 1},
    {name:'blah2',id : 2},
    {name:'blah3',id : 3},
    {name:'blah4',id : 4},
    {name:'blah5',id : 5},
    {name:'blah6',id : 6},
    {name:'blah7',id : 7},
  ]);
  // filtering out the selected data
  const pressHandler = (id)=>{
     setTodos((prevData)=>{
      return prevData.filter(person => person.id != id);
     });
  }

  // adding new data
  const submitHandler = (text) =>{
    if(text.length < 3){
        Alert.alert('small word','Add more chars',[
          {text: 'Understood', onPress:()=>console.log("blah")}
        ]);
    }else{
      setTodos((prevData)=>{
        return [
          {name:text, id:Math.random.toString()},
          ...prevData
        ];
      })
    }
  }
  return (
    <TouchableWithoutFeedback 
      onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <InputTodos submitHandler={submitHandler}/>
        <FlatList
          numColumns={2}
          keyExtractor={(item)=>item.id}
          data={Todos}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>pressHandler(item.id)}>
              <Text style={styles.item}> {item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding: 5,
    margin: 5,
    fontSize:24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
