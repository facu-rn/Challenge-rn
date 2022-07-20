import { Button, StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'

type Props = {
  navigation: any
}
const Detail:FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Detail</Text>
      <Button title='go to Home' onPress={()=>navigation.navigate('Home')} />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})