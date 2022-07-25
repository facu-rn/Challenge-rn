import * as React from "react";
import { AuthRoute } from "../routes";
import Home from "../screens/Autenticated/Home";
import { DrawerStack } from "../routes";
import CustomDrawer from "../components/drawers/CustomDrawer";
import Cart from "../screens/Autenticated/Cart";
import Messages from "../screens/Autenticated/Messages";
import Profile from "../screens/Autenticated/Profile";
import Settings from "../screens/Autenticated/Settings";

const DrawerMap = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <DrawerStack.Screen name={AuthRoute.homeScreen} component={Home} />
      <DrawerStack.Screen name={AuthRoute.cartScreen} component={Cart} />
      <DrawerStack.Screen name={AuthRoute.messageScreen} component={Messages} />
      <DrawerStack.Screen name={AuthRoute.profileScreen} component={Profile} />
      <DrawerStack.Screen
        name={AuthRoute.settingsScreen}
        component={Settings}
      />
    </DrawerStack.Navigator>
  );
};
export default DrawerMap;
