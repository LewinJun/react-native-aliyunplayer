import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, UIManager,requireNativeComponent } from "react-native";
import RNAliPlayer from "../components/AliPlayer";

export default class VideoScreen extends Component<StackScreenProps<any>, any> {

    componentDidMount() {
        this.props?.navigation.setOptions({
            headerTitle: "视频播放"
        })
    }

    render() {
        return <View style={{ flex: 1, padding: 30 , alignItems: "center"  }}>
            <RNAliPlayer style={{ width: 300, height: 300 }} 
            source='http://200024424.vod.myqcloud.com/200024424_709ae516bdf811e6ad39991f76a4df69.f20.mp4'
            setAutoPlay={true}
            setLoop={true}
             />
        </View>
    }

}