import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CustomHeader from "../../components/headers/CustomHeader";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const Detail = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [articulo, setArticulo] = useState({});
  const [focused, setFocused] = useState(false);
  const { idParam } = route.params;

  useEffect(() => {
    const getProducts = async () => {
      if (focused) {
        const data = await axios.get(
          `https://dummyjson.com/products/${idParam}`
        );
        setArticulo(data.data);
        setLoading(false);
        setFocused(false);
      }
    };
    getProducts();
  }, [focused]);

 
  useFocusEffect(
    useCallback(() => {
      setFocused(true)
      setLoading(true)
      return () => {};
    }, [])
  );
  console.log("loading es", loading);
  return (
    <View>
      <CustomHeader navigation={navigation} goBack />
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <Text>The id is: {articulo.id}</Text>
          <Text>Producto name is: {articulo.title} </Text>
        </>
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
