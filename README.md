# react-native-aliyunplayer
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
