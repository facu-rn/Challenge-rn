import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthMap from "./src/stacks/AuthMap";
import NoAuthMap from "./src/stacks/NoAuthMap";
export default function App() {
  const [isLoggin, setisLoggin] = useState(true);
  return (
    <NavigationContainer>
      {isLoggin ? <AuthMap /> : <NoAuthMap />}
    </NavigationContainer>
  );
}

