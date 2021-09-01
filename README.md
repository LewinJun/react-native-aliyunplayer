# react-native-lewin-aliyunplayer
阿里云播放器 react native,播放暂停等1.0版本没有UI，需自定义


## Table of contents
- [Install](#install)
- [Usage](#usage)


## Install
### 1: yarn add 或者npm install
`yarn add react-native-lewin-aliyunplayer `

### 2: android需要配置build.gradle maven {url 'https://maven.aliyun.com/repository/releases'}
```xml
allprojects {
    repositories {
        mavenLocal()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        maven {
            url 'https://maven.aliyun.com/repository/releases'
        }
        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }
    }
}
```

## Usage
```javascript
this.player?.startPlay() : this.player?.pausePlay()
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
```

> 属性和方法回调，可以看index.tsx

```javascript

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

    onAliCompletion?: (e: AliPlayerFuncParams<{ code: "onAliCompletion" }>) => void, // 播放完成事件
    onAliError?: (e: AliPlayerFuncParams<{ code: string; message: string }>) => void, // 出错事件
    onAliLoadingBegin?: (e: AliPlayerFuncParams<{ code: "onAliLoadingBegin" }>) => void, // 缓冲开始。
    onAliLoadingProgress?: (e: AliPlayerFuncParams<{ percent: number }>) => void, // 缓冲进度
    onAliLoadingEnd?: (e: AliPlayerFuncParams<{ code: "onAliLoadingEnd" }>) => void, // 缓冲结束
    onAliPrepared?: (e: AliPlayerFuncParams<{ duration: number }>) => void, // 准备成功事件
    onAliRenderingStart?: (e: AliPlayerFuncParams<{ code: "onRenderingStart" }>) => void, // 首帧渲染显示事件
    onAliSeekComplete?: (e: AliPlayerFuncParams<{ code: "onAliSeekComplete" }>) => void, // 拖动结束
    onAliCurrentPositionUpdate?: (e: AliPlayerFuncParams<{ position: number }>) => void, // 播放进度
    onAliBufferedPositionUpdate?: (e: AliPlayerFuncParams<{ position: number }>) => void, // 缓冲进度
    onAliAutoPlayStart?: (e: AliPlayerFuncParams<{ code: "onAliAutoPlayStart" }>) => void, // 自动播放开始
    onAliLoopingStart?: (e: AliPlayerFuncParams<{ code: "onAliLoopingStart" }>) => void, // 循环播放开始
    onAliBitrateChange?: (e: AliPlayerFuncParams<{ index: number; width: number; height: number }>) => void, // 切换清晰度
    onAliBitrateReady?: (e: AliPlayerFuncParams<{ index: number; width: number; height: number; bitrate: number }>) => void, // 获取清晰度回调
}

interface AliPlayerFuncParams<T> {
    nativeEvent: T
}

```
