import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomHeader from "../../components/headers/CustomHeader";
import CustomModal from "../../components/modals/CustomModal";
import { Avatar } from "react-native-elements";
import Welcome from "../../components/Welcome";

const Home = ({ navigation }) => {
  const themeStatus = useSelector((state) => state.theme);
  const { colors, theme } = themeStatus;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const width = useWindowDimensions().width;

  const device = () => {
    width > 600 ? "tablet" : "phone";
  };
  return (
    <View>
      <CustomHeader rightPress={() => navigation.openDrawer()} showSwitch theme={true}/>
      <StatusBar barStyle={"light-content"} />
      <Welcome userName={'Facundo Valencia'} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
