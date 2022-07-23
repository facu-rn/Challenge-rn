import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ButtonRounded = ({title, onPress}) => {
const colors = useSelector((state)=>state.theme.colors)
  return (
    <TouchableOpacity onPress={onPress}
    style={[styles.container,{backgroundColor:colors.main}]} >
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonRounded

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        alignItems:'center',
        padding:3,
        paddingHorizontal:10,
        marginVertical:10
    },
    text:{
        color:'#fff',
        fontSize:18
    }
})