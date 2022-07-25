import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/headers/CustomHeader'

const Messages = ({navigation}) => {
  return (
    <View>
      <CustomHeader navigation={navigation} goBack/>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})