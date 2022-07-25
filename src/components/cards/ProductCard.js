import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Rating } from "react-native-ratings";
import { useSelector } from "react-redux";
import ButtonRounded from "../buttons/ButtonRounded";
import * as rootNavigation from "../../../rootNavigation";


const width = Dimensions.get("screen").width;
 const device = width>600?'tablet':'phone'
 const widthDevice= device==='phone'? wp('90%') : wp('45%')
console.log('que dispositivo sos:', device)
const ProductCard = ({ items }) => {
  const URI = items.images[0]
    ? items.images[0]
    : "https://patuelligroup.vteximg.com.br/arquivos/ids/263861-1000-1000/img_2D_0001_large.jpg";
  const colors = useSelector((state) => state.theme.colors);

  return (
    <View style={[styles.container, {width:widthDevice} ]}>
      <Image source={{ uri: URI }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.cardText}>{items.brand}</Text>
        <Text style={[styles.price, { color: colors.main }]}>
          ${items.price}
        </Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={15}
          startingValue={items.rating}
          style={{ alignSelf: "flex-start", paddingVertical: 3 }}
          fractions={2}
        />
        <Text style={styles.cardText}>Disponibles: {items.stock}</Text>
        <Text style={styles.cardText}>{items.category}</Text>
        <ButtonRounded
          title={"Ver detalles"}
          onPress={() => {
            rootNavigation.navigate("Detail", { idParam: items.id });
          }}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom:30
  },
  image: {
    height: hp("22%"),

    resizeMode: "contain",
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    paddingVertical: 5,
  },

  price: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 2,
  },
  cardText: {
    paddingVertical: 5,
    fontSize: 16,
  },
});
