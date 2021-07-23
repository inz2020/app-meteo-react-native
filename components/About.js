import React from 'react'
import { View , Text, StyleSheet, ActivityIndicator} from 'react-native'


export default class About extends React.Component{

render(){
return (
<View style={style.view}>
<Text style={style.title}>A propos de moi</Text>
<Text>Lorem</Text>
<View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
<ActivityIndicator style={style.view} color="#FF0000" size="large"/>
<ActivityIndicator style={style.view} color="#00FF00" size="large"/>
</View>
</View>
)}


}

const style= StyleSheet.create({
view:{
margin:20},
title:{
fontSize:22,
marginBottom:20}
})