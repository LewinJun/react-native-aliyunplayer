import React, { Component } from 'react'
import { View, requireNativeComponent, findNodeHandle, StyleProp, ViewStyle, UIManager } from 'react-native'
var AliyunPlayer = requireNativeComponent('RNAliplayer');

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

export default class AliPlayer extends Component <AliPlayerProps>{
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
    return(
      <AliyunPlayer ref={this._assignRoot} {...this.props}/>
    )
  }
}