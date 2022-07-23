import * as React from "react";
import { AuthRoute, AuthStack } from "../routes";
import Detail from "../screens/Autenticated/Detail";
import Home from "../screens/Autenticated/Home";
import { DrawerStack } from "../routes";
const AuthMap = () => {
  return (
    <>
      <DrawerStack.Navigator 
       screenOptions={{
         headerShown:false
         }}>
        <DrawerStack.Screen name={AuthRoute.homeScreen} component={Home} />
        <DrawerStack.Screen name={AuthRoute.detailScreen} component={Detail}/>
      </DrawerStack.Navigator>
    </>
  );
};
export default AuthMap;
