import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomHeader from "../../components/headers/CustomHeader";
import { Image } from "react-native";
import Welcome from "../../components/Welcome";
import ProductCard from "../../components/cards/ProductCard";
import axios from "axios";
const Home = ({ navigation }) => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    setProducts(data);
  };
  //getProducts();
  //console.log(products);
  const width = useWindowDimensions().width;

  const device = () => {
    width > 600 ? "tablet" : "phone";
  };
  return (
    <View>
      <CustomHeader rightPress={() => navigation.openDrawer()} />
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        
        <Welcome userName={"Facundo Valencia"} />
        <ProductCard />
        
        
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
