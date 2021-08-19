import React from 'react'
import { View, requireNativeComponent, ViewPropTypes, StyleProp, ViewStyle, UIManager } from 'react-native'
var AliPlayer = requireNativeComponent('RNAliplayer');

interface AliPlayerProps {
    style?: StyleProp<ViewStyle>;
    source?: string; // 播放地址
    setAutoPlay?: boolean; // 是否自动播放
    setLoop?: boolean; // 是否循环播放
    setMute?: boolean; //是否静音
    enableHardwareDecoder?: boolean; //是否开启硬件解码
    setVolume?: number; //设置播放器音量,范围0~1.
    setSpeed?: number; //播放速率，0.5-2.0之间，1为正常播放
    setReferer?: string; //设置请求referer
    setUserAgent?: string; // 设置UserAgent
    setMirrorMode?: number; // 0:无镜像;1:横向;2:竖向
    setRotateMode?: number; // 设置旋转 0:0度;1:90度;2:180度;3:270度;
    setScaleMode?: number; // 设置画面缩放模式 0:宽高比适应;1:宽高比填充;2:拉伸填充;
    configHeader?: Array<any>; // 配置自定义header
    selectBitrateIndex?: number; // 切换清晰度  选择清晰度的index，-1代表自适应码率

    onAliCompletion?: Function, // 播放完成事件
    onAliError?: Function, // 出错事件
    onAliLoadingBegin?: Function, // 缓冲开始。
    onAliLoadingProgress?: Function, // 缓冲进度
    onAliLoadingEnd?: Function, // 缓冲结束
    onAliPrepared?: Function, // 准备成功事件
    onAliRenderingStart?: Function, // 首帧渲染显示事件
    onAliSeekComplete?: Function, // 拖动结束
    onAliCurrentPositionUpdate?: Function, // 播放进度
    onAliBufferedPositionUpdate?: Function, // 缓冲进度
    onAliAutoPlayStart?: Function, // 自动播放开始
    onAliLoopingStart?: Function, // 循环播放开始
    onAliBitrateChange?: Function, // 切换清晰度
    onAliBitrateReady?: Function, // 获取清晰度回调

    startPlay?: () => void;
    pausePlay?: () => void;
    stopPlay?: () => void;
    reloadPlay?: () => void;
    restartPlay?: () => void;
    destroyPlay?: () => void;
    seekTo?: (position :number) => void;
}

const RNAliPlayer = (props: AliPlayerProps) => {

    return (<View>
        <AliPlayer {...props} />
    </View>)
}

export default RNAliPlayer;