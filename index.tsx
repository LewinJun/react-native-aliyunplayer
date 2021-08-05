import { View, Text } from 'react-native'
import React, { Component } from 'react'
export interface VideoProps {
    source?: { uri: string };
}


const Video1 = (props: VideoProps) => {
    return null
    //     return (<View style= {{ flex: 1 }
    // }>
    //     <Text>待添加 < /Text>
    //     < /View>)
}

// export default Video

export default class Video extends Component {

    render() {
        return <View>
            <Text style={{ color: "red", fontSize: 16 }}>待添加 </Text>
        </View>
    }
}