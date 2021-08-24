// generator/templates/component.ts
import React, { Component } from 'react';
import {
    Alert, ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import WavyBackground from "../../components/WavyBG/WavyBackground";
import {ReaderWriterService} from "../../services/ReaderWriter.service";
import List from "../../components/List/List";

export class ItemsAvailablePage extends Component<any, any> {

    itemsArrKey = "availableItemsArrKey";
    availableData = [];
    constructor(props: any){
        super(props);
        this.initAvailableData();
        setInterval(() => {
            this.initAvailableData();
        }, 10000);
    }

    initAvailableData() {
        ReaderWriterService.getInstance().readData(this.itemsArrKey)
            .then(
                (val) => {
                    let myArr = [];
                    if (val != null) {
                        myArr = JSON.parse(val);
                    }
                    this.availableData = myArr;
                    this.setState({availableData: this.availableData})
                    console.log('Data', val);
                }
            )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 28}}>Available Items</Text>

                <ScrollView style={{marginTop: 16}}>
                    {
                        this.availableData?.map((Items, key) => {
                            return (<List key={key} {...Items} />)
                        })
                    }
                </ScrollView>
                <WavyBackground imagePath={require('./../../../assets/images/wave4.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});


export default ItemsAvailablePage;