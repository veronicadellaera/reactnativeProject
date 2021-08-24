
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';
import ItemsAvailablePage from '../../screens/ItemsAvailablePage/ItemsAvailablePage';
import NAVIGATION from '../constants';



class AvailableItemScreenStack extends Component {

    myProp: any
    constructor(props: any) {
        super(props);
        this.myProp = props;
    }

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator
                initialRouteName={NAVIGATION.availableItems.routeId}
                screenOptions={{
                    // headerLeft: () => (
                    //     <NavigationDrawerStructure navigationProps={this.myProp.navigation} />
                    // ),
                }}>
                <Stack.Screen
                    name={NAVIGATION.availableItems.title}
                    component={ItemsAvailablePage}
                    options={{
                        title: NAVIGATION.availableItems.title, //Set Header Title
                    }}
                />
            </Stack.Navigator>
        );
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});


export default AvailableItemScreenStack;
