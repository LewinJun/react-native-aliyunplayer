import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { Component, useRef } from "react";
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";
import AliPlayer from "react-native-aliyunplayer";

export default class VideoScreen extends Component<StackScreenProps<any>, {
    play: boolean
}> {

    state = {
        play: true,
    }

    player?: AliPlayer;

    componentDidMount() {
        this.props?.navigation.setOptions({
            headerTitle: "视频播放"
        })
    }

    render() {
        const { play } = this.state
        return <View style={{ flex: 1, display: 'flex' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AliPlayer
                        ref={(e) => this.player = e}
                        style={{ flex: 1 }}
                        source='https://d-appimg.doctopia.com.cn/video/1626170384423967.mp4'
                        setAutoPlay={true}
                        setLoop={true}
                        onAliCurrentPositionUpdate={(e) => {
                            // console.log(e.nativeEvent)
                        }}
                        onAliPrepared={(e) => {
                            console.log(e.nativeEvent)
                        }}
                    />
                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={() => {
                            !play ? this.player?.startPlay() : this.player?.pausePlay()
                            this.setState({ play: !play }, () => {

                            })
                        }}>
                            <Text style={{ color: 'white', marginRight: 15, padding: 10 }}>{
                                play ? '暂停' : '播放'
                            }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            // 30秒位置
                            this.player?.seekTo(30)
                        }}>
                            <Text style={{ color: 'white' }}>跳转到</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    }

}

const styles = StyleSheet.create({
    bottomView: {
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
})
