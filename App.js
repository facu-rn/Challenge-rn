import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StoreProvider from "./src/redux/store/StoreProvider";
import AuthMap from "./src/stacks/AuthMap";
import NoAuthMap from "./src/stacks/NoAuthMap";

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <AuthMap />
        {/* <NoAuthMap />*/}
      </NavigationContainer>
    </StoreProvider>
  );
}
