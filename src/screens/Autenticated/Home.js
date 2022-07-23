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
  const [productos, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      const data = await axios.get("https://dummyjson.com/products");
      setProducts(data.data.products);
      //console.log('TU MAMA',data.data.products);
      //https://d2az8otjr0j19j.cloudfront.net/templates/001/047/992/twig/static/images/menu/weiter.jpg?581208725
    };
   // getProducts();
  }, []);
  const width = useWindowDimensions().width;
  const device = () => {
    width > 600 ? "tablet" : "phone";
  };
  return (
    <View style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
      <CustomHeader rightPress={() => navigation.openDrawer()} />
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        <Welcome userName={"Facundo Valencia"} />
        <View style={{alignSelf:'center'}}>
          <View style={{marginVertical:10}}>
        <ProductCard/>

          </View>
          <View style={{marginVertical:10}}>
        <ProductCard url={'https://d2az8otjr0j19j.cloudfront.net/templates/001/047/992/twig/static/images/menu/weiter.jpg?581208725'}/>

          </View>
          
          <View style={{marginVertical:10}}>
          <ProductCard url={'https://cdn.shopify.com/s/files/1/0615/7385/7485/products/5813.jpg?v=1648964355'}/>

          </View>
        
        </View>
       
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
