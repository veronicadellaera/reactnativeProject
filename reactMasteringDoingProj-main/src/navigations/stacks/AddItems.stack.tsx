
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from '../NavigationDrawerStructure';
import ItemsAvailablePage from '../../screens/ItemsAvailablePage/ItemsAvailablePage';
import AddItemPage from '../../screens/AddItemPage/AddItemPage';
import NAVIGATION from '../constants';



class AddItemScreenStack extends Component {

    myProp: any
    constructor(props: any) {
        super(props);
        this.myProp = props;
    }

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator
                initialRouteName={NAVIGATION.home.routeId}
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: 'bold', //Set Header text style
                    },
                }}>
                <Stack.Screen
                    name={NAVIGATION.addItem.title}
                    component={AddItemPage}
                    options={{
                        title: NAVIGATION.addItem.title, //Set Header Title
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


export default AddItemScreenStack;
