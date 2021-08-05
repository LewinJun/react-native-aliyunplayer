import { ParamListBase, RouteProp } from "@react-navigation/core";
import { CardStyleInterpolators, StackNavigationOptions } from "@react-navigation/stack";
import { StatusBarStyle } from "react-native";
import HomeScreen from '../screen/HomeScreen'
import VideoPageScreen from '../screen/VideoPageScreen'
import VideoScreen from '../screen/VideoScreen'


export interface IStaskConfigItem {
    name: string;
    component: React.ComponentType<any>;
    statusStype?: StatusBarStyle;
    options?: StackNavigationOptions | ((props: {
        route: RouteProp<ParamListBase, any>;
        navigation: any;
    }) => StackNavigationOptions)
}

const ScreenRouter: Array<IStaskConfigItem> = [
    {
        name: "Home",
        component: HomeScreen,
        options: {
            headerTitle: "首页"
        }
    },
    {
        name: "VideoPage",
        component: VideoPageScreen,
        options: {
            headerTitle: "视频列表",
            headerTitleStyle: {

            }
        }
    },
    {
        name: "Video",
        component: VideoScreen,
        options: {
            headerTitle: "视频"
        }
    }
]

export default ScreenRouter