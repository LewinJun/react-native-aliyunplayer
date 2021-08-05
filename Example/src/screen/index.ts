import { RouteProp, NavigationProp, ParamListBase } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export interface ScreenProps {
    navigation: NavigationProp<ParamListBase, any, any, StackNavigationOptions>;
    route: RouteProp<ParamListBase, string>;
}