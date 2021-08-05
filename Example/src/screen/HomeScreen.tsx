import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { Component } from "react";
import { View } from "react-native";
import Button from "../components/Button";

export default class HomeScreen extends Component<StackScreenProps<any>, any> {

    render() {
        return <View style={{ flex: 1, padding: 30 }}>
            <Button text={'视频播放界面'} onPress={() => {
                this.props?.navigation?.navigate("Video")
            }} />
            <Button style={{ marginTop: 30 }} text={'视频列表播放界面'} onPress={() => {
                this.props?.navigation?.navigate("VideoPage")
            }} />
        </View>
    }

}