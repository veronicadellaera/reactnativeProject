import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WavyBackground from "../../components/WavyBG/WavyBackground";

export class HomePage extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 28}}>Home</Text>
                <Text>Welcome to Kitchen Buddy</Text>
                <WavyBackground imagePath={require('./../../../assets/images/wave2.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
});


export default HomePage;