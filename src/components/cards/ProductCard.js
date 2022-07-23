import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Rating } from "react-native-ratings";
import { useSelector } from "react-redux";
import ButtonRounded from "../buttons/ButtonRounded";
const ProductCard = ({
  url,
  title,
  brand,
  price,
  raiting,
  stock,
  category,
  onPress,
}) => {
  const URI = url
    ? url
    : "https://patuelligroup.vteximg.com.br/arquivos/ids/263861-1000-1000/img_2D_0001_large.jpg";
  const colors = useSelector((state) => state.theme.colors);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: URI,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Titulo: zapatillas</Text>
        <Text style={styles.cardText}>Marca del producto</Text>
        <Text style={[styles.price, { color: colors.main }]}>Precio $213</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={15}
          startingValue={5}
          style={{ alignSelf: "flex-start", paddingVertical: 3 }}
        />
        <Text style={styles.cardText}>Disponibles: 12</Text>
        <Text style={styles.cardText}>Category</Text>
        <ButtonRounded title={"Ver detalles"} onPress={() => {}} />
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
    width: wp("90%"),
  },
  image: {
    height: hp("22%"),

    resizeMode: "cover",
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
