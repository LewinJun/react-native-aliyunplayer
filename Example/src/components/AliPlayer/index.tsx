import React from 'react'
import { View, requireNativeComponent, ViewPropTypes, StyleProp, ViewStyle, UIManager } from 'react-native'
var AliPlayer = requireNativeComponent('RNAliplayer');

interface AliPlayerProps {
    style?: StyleProp<ViewStyle>;
    source?: string;
    setAutoPlay?: boolean;
    setLoop?: boolean;
    setMute?: boolean;
    enableHardwareDecoder?: boolean;
    setVolume?: number;
    setSpeed?: number;
    setReferer?: string;
    setUserAgent?: string;
    setMirrorMode?: number;
    setRotateMode?: number;
    setScaleMode?: number;
    configHeader?: Array<any>;
    selectBitrateIndex?: number;
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