import React, {Component} from 'react';
import {
    Dimensions, ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Svg, {Path} from 'react-native-svg';

export class WavyBackground extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                // resizeMethod={'auto'}
                source={this.props.imagePath}
                style={{
                    width: "100%",
                    height: 150,
                    position: 'absolute',
                    bottom: 0,
                    zIndex: -1
                }}
                imageStyle={{
                    resizeMode: "cover",
                    alignSelf: "flex-end"
                }}
            >
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF'
    }
});


export default WavyBackground;