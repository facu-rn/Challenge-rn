import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import configData from "../../../config.json";
import { useSelector } from "react-redux";
const imageBG = "https://fondosmil.com/fondo/11475.jpg";
const CustomDrawer = (props) => {
  const colors = useSelector((state) => state.theme.colors);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.bgPrimary }}
      >
        <ImageBackground
          source={{
            uri: imageBG,
          }}
          style={{ padding: 20 }}
        ><View style={{alignItems:'flex-start'}}>
             <Image
            source={{ uri: configData.user.avatar }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{color:'#fff', fontSize:20,}} >Bienvenido {configData.user.name}</Text>
        </View>
         
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
