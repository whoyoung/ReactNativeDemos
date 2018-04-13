import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Svg, {
    G,
    Line,
    Path,
    Text
} from 'react-native-svg';

export default class ReactNativeSvg extends Component {
    render() {
        return <Svg
            height="60"
            width="200"
        >
            <Text
                fill="none"
                stroke="purple"
                fontSize="20"
                fontWeight="bold"
                x="100"
                y="20"
                textAnchor="middle"
            >STROKED TEXT</Text>
        </Svg>
    }
}