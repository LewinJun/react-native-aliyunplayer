import React, { Component } from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer, NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack';
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenRouter, { IStaskConfigItem } from "./config";
const RootStack = createStackNavigator();
export default class App extends Component {

    screenConfig: { [key: string]: IStaskConfigItem } = {}

    render() {
        return <NavigationContainer>
            <RootStack.Navigator initialRouteName={'Home'} screenOptions={({ route, navigation }) => ({
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerStyle: {
                    backgroundColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: '#e4e4e4',
                    elevation: 0,
                    shadowOpacity: 0
                },
                cardStyle: {
                    backgroundColor: '#fff'
                },
                headerTitleStyle: {
                    color: '#222',
                    ...Platform.select({
                        android: {
                            width: Dimensions.get('window').width - 140,
                            textAlign: 'center'
                        }
                    })
                },
                headerBackTitleVisible: false,
                headerTintColor: '#444'
            })}>

                {ScreenRouter.map((item) => <RootStack.Screen {...item} component={item.component} key={item.name} />)}
            </RootStack.Navigator>
        </NavigationContainer>

    }
}