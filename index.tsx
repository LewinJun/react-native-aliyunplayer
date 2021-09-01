import React, { Component } from 'react'
import { View, requireNativeComponent, findNodeHandle, StyleProp, ViewStyle, UIManager } from 'react-native'
var AliyunPlayer = requireNativeComponent('RNAliplayer');

export enum IScaleMode {
    SCALEASPECTFIT = 0,
    SCALEASPECTFILL = 1,
    SCALETOFILL = 2,
}

export interface AliPlayerProps {
    style?: StyleProp<ViewStyle>;
    source: string; // 播放地址
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
    setScaleMode?: IScaleMode; // 设置画面缩放模式 0:宽高比适应;1:宽高比填充;2:拉伸填充;
    configHeader?: Array<any>; // 配置自定义header
    selectBitrateIndex?: number; // 切换清晰度  选择清晰度的index，-1代表自适应码率

    onAliCompletion?: (e: AliPlayerFuncParams<{ code: "onAliCompletion" }>) => void, // 播放完成事件
    onAliError?: (e: AliPlayerFuncParams<{ code: string; message: string }>) => void, // 出错事件
    onAliLoadingBegin?: (e: AliPlayerFuncParams<{ code: "onAliLoadingBegin"; duration: number; width: number; height: number }>) => void, // 缓冲开始。
    onAliLoadingProgress?: (e: AliPlayerFuncParams<{ percent: number }>) => void, // 缓冲进度
    onAliLoadingEnd?: (e: AliPlayerFuncParams<{ code: "onAliLoadingEnd"; duration: number; width: number; height: number }>) => void, // 缓冲结束
    onAliPrepared?: (e: AliPlayerFuncParams<{ duration: number; width: number; height: number }>) => void, // 准备成功事件
    onAliRenderingStart?: (e: AliPlayerFuncParams<{ code: "onRenderingStart"; duration: number; width: number; height: number }>) => void, // 首帧渲染显示事件
    onAliSeekComplete?: (e: AliPlayerFuncParams<{ code: "onAliSeekComplete" }>) => void, // 拖动结束
    onAliCurrentPositionUpdate?: (e: AliPlayerFuncParams<{ position: number }>) => void, // 播放进度
    onAliBufferedPositionUpdate?: (e: AliPlayerFuncParams<{ position: number }>) => void, // 缓冲进度
    onAliAutoPlayStart?: (e: AliPlayerFuncParams<{ code: "onAliAutoPlayStart"; duration: number; width: number; height: number }>) => void, // 自动播放开始
    onAliLoopingStart?: (e: AliPlayerFuncParams<{ code: "onAliLoopingStart" }>) => void, // 循环播放开始
    onAliBitrateChange?: (e: AliPlayerFuncParams<{ index: number; width: number; height: number }>) => void, // 切换清晰度
    onAliBitrateReady?: (e: AliPlayerFuncParams<{ index: number; width: number; height: number; bitrate: number }>) => void, // 获取清晰度回调
}

export interface AliPlayerFuncParams<T> {
    nativeEvent: T
}

export default class AliPlayer extends Component<AliPlayerProps>{
    // constructor(props: AliPlayerProps) {
    //   super(props)

    // }

    componentWillUnmount() {
        this.stopPlay();
        this.destroyPlay();
    }

    _assignRoot = (component) => {
        this._root = component;
    };

    _dispatchCommand = (command, params = []) => {
        if (this._root) {
            UIManager.dispatchViewManagerCommand(findNodeHandle(this._root), command, params);
        }
    };

    setNativeProps = (props) => {
        if (this._root) {
            this._root.setNativeProps(props);
        }
    };

    // 开始播放。
    startPlay = () => {
        this._dispatchCommand('startPlay');
    };

    // 暂停播放
    pausePlay = () => {
        this._dispatchCommand('pausePlay');
    };

    // 停止播放
    stopPlay = () => {
        this._dispatchCommand('stopPlay');
    };

    // 重载播放
    reloadPlay = () => {
        this._dispatchCommand('reloadPlay');
    };

    // 重新播放
    restartPlay = () => {
        this._dispatchCommand('restartPlay');
    };

    // 释放。释放后播放器将不可再被使用
    destroyPlay = () => {
        this._dispatchCommand('destroyPlay');
    };

    // 跳转到指定位置,传入单位为秒
    seekTo = (position = 0) => {
        if (typeof position === 'number') {
            this._dispatchCommand('seekTo', [position]);
        }
    };

    render() {
        return (
            <AliyunPlayer ref={this._assignRoot} {...this.props} />
        )
    }
}