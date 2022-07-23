import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ProductCard = ({ url }) => {
  const URI = url
    ? url
    : "https://w7.pngwing.com/pngs/931/848/png-transparent-nike-free-shoe-sneakers-running-women-shoes-blue-grey-outdoor-shoe.png";
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
        <Text style={styles.brand}>Marca del producto</Text>
        <Text style={styles.price}>Precio $213</Text>

        <Text>Aqui va el rating</Text>
        <Text>Stock</Text>
        <Text>Category</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: "center",
  },
  image: {
    height: hp("20%"),
    width: wp("80%"),
    resizeMode: "cover",
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
  },
  brand: {
    fontSize: 18,
  },
  price: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
});
