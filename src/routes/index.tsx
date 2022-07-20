import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AuthRoute ={
    homeScreen : 'Home',
    detailScreen: 'Detail',

}
export const NoAuthRoute = {
    register : 'Register'
}
export const AuthStack = createNativeStackNavigator();
export const NoAuthStack = createNativeStackNavigator();