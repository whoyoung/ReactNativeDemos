import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Svg, {
    G,
    Line,
    Path,
    Text,
    TSpan,
    Defs,
    TextPath
} from 'react-native-svg';

export default class ReactNativeSvg extends Component {
    render() {
        return <Svg
        height="300"
        width="300"
    >
        <Defs>
            <Path
                id="path"
                d='M25 10 L138 65 L220 190'
            />
        </Defs>
        <G y="20">
            <Text
                fill="blue"
    
            >
                <TextPath href="#path" startOffset="10%">
                    go up and down, then up again
                    
                </TextPath>
            </Text>
            <Path
                d='M25 10 L138 65 L220 190'
                fill="none"
                stroke="black"
                strokeWidth="2"
            />
        </G>
    </Svg>
    }
}