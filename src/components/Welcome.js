import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import BadgeIcon from "./icons/BadgeIcon";
//https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png
const Welcome = ({ userName, userImg }) => {
  const themeStatus = useSelector((state) => state.theme);
  const { colors } = themeStatus;
  const URI = userImg
    ? userImg
    : "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png";
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Avatar source={{ uri: URI }} size={50} rounded />

        <View style={styles.textPosition}>
          <Text style={[styles.text1, { color: colors.main }]}>Hola!,</Text>
          <Text style={styles.text2}>{userName}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <BadgeIcon name={"cart-outline"} />
        <BadgeIcon name={"bell-outline"} badgeType={"error"} value={1} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  textPosition: {
    marginLeft: 15,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",

  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
});
