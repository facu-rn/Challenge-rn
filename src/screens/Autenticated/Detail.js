import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/headers/CustomHeader";

const Detail = ({ navigation }) => {
  return (
    <View>
      <CustomHeader navigation={navigation} goBack />
      <Button title="go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
