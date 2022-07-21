import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Detail = ({navigation}) => {
  return (
    <View>
      <Text>Detail</Text>
      <Button title='go to Home' onPress={()=>navigation.navigate('Home')} />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})