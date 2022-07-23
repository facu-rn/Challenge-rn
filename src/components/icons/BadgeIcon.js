import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Badge } from "react-native-elements";

const BadgeIcon = ({ value, name, badgeType }) => {
  return (
    <View>
      <Icon
        type="material-community"
        name={name}
        color={"gray"}
        size={30}
        style={{ padding: 5 }}
      />
      <Badge
        value={value}
        status={badgeType ? badgeType : null}
        //success, error, primary, warning
        containerStyle={{ position: "absolute", top: -4, right: -4 }}
      />
    </View>
  );
};

export default BadgeIcon;

const styles = StyleSheet.create({});