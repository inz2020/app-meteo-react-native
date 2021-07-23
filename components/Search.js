import React from 'react'
import {View, TextInput} from 'react-native';

export default class  Search extends React.Component{
const [text, onChangeText] = React.useState("Useless Text");
render(){
return(
  <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
         placeholder="Entrer la ville"
         keyboardType="text"
         underlineColorAndroid='transparent'
       />
)}
}

const styles = StyleSheet.create({
  input: {
   height: 40,
    borderColor: 'gray',
    borderWith: '1',
    justifyContent: 'center',
  },
});
