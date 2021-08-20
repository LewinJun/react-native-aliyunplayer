import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { Component, useRef } from "react";
import { View } from "react-native";
import AliPlayer from "../components/AliPlayer";

export default class VideoScreen extends Component<StackScreenProps<any>, any> {
    componentDidMount() {
        this.props?.navigation.setOptions({
            headerTitle: "视频播放"
        })
    }

    render() {
        return <View style={{ flex: 1, padding: 30 , alignItems: "center"  }}>
            <AliPlayer
            style={{ width: 300, height: 300 }} 
            source='https://d-appimg.doctopia.com.cn/video/1626170384423967.mp4'
            setAutoPlay={true}
            setLoop={true}
        />
        
    </View>
    }

}
