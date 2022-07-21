import * as React from "react";
import { AuthRoute, AuthStack } from "../routes";
import Detail from "../screens/Autenticated/Detail";
import Home from "../screens/Autenticated/Home";

const AuthMap = () => {
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen name={AuthRoute.homeScreen} component={Home} />
        <AuthStack.Screen name={AuthRoute.detailScreen} component={Detail}/>
      </AuthStack.Navigator>
    </>
  );
};
export default AuthMap;
