import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const AuthRoute ={
    homeScreen : 'Home',
    detailScreen: 'Detail',

}
export const NoAuthRoute = {
    register : 'Register'
}
export const AuthStack = createNativeStackNavigator();
export const NoAuthStack = createNativeStackNavigator();
export const DrawerStack = createDrawerNavigator();