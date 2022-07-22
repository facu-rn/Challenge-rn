import { Button, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/reducers/themeReducer";
const Home = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);
  const colors = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
const width = useWindowDimensions().width;
console.log(width)
  const handlePress = () => {
    if (theme === "dark") {
      return dispatch({ type: "change_theme", payload: "light" });
    } else {
      dispatch({ type: "change_theme", payload: "dark" });
    }
  };
  return (
    <View>
      <Text style={{ color: colors.main }}>{theme}</Text>

      <Button title="Go Detail" onPress={() => navigation.navigate("Detail")} />
      <Button title="change theme" onPress={handlePress} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
