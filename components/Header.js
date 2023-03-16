import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
            <Text style={styles.text}> Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'coral',
    height:80,
    paddingTop:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    margin: 5,
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
