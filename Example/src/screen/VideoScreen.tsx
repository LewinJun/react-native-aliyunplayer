import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { Component } from "react";
import { View } from "react-native";
import Video from 'react-native-aliyunplayer'
export default class VideoScreen extends Component<StackScreenProps<any>, any> {

    componentDidMount() {
        this.props?.navigation.setOptions({
            headerTitle: "视频播放"
        })
    }

    render() {
        return <View style={{ flex: 1, padding: 30 }}>
            <Video />
        </View>
    }

}