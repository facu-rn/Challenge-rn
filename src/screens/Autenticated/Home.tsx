import { Button, StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
type Props ={
  navigation: any,
}
const Home:FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go Detail' onPress={()=>navigation.navigate('Detail')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})