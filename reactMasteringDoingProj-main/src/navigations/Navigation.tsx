import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    NavigationContainer
} from '@react-navigation/native';
import HomePage from '../screens/HomePage/HomePage';
import ItemsAvailablePage from '../screens/ItemsAvailablePage/ItemsAvailablePage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import AddItemScreenStack from './stacks/AddItems.stack';
import NAVIGATION from './constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontAwesome5} from '@expo/vector-icons';
import APP_THEME from '../theme';
import AddItemPage from "../screens/AddItemPage/AddItemPage";

class Navigation extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const Drawer = createDrawerNavigator();
        return (
            <NavigationContainer theme={APP_THEME}>
                <Drawer.Navigator initialRouteName={NAVIGATION.home.drawerOrTabTitle}>
                    <Drawer.Screen
                        name={NAVIGATION.home.drawerOrTabTitle}
                        options={{
                            drawerLabel: NAVIGATION.home.drawerOrTabTitle,
                            title: NAVIGATION.home.drawerOrTabTitle,
                            drawerIcon: ({focused, size}) => (
                                <Ionicons name={NAVIGATION.home.icon} size={size}/>
                            ),
                        }}
                        component={HomePage}
                    />
                    <Drawer.Screen
                        name={NAVIGATION.availableItems.drawerOrTabTitle}
                        options={{
                            drawerLabel: NAVIGATION.availableItems.drawerOrTabTitle,
                            title: NAVIGATION.availableItems.drawerOrTabTitle,
                            drawerIcon: ({focused, size}) =>
                                (<FontAwesome5 name="store" size={24} color="black"/>
                                ),
                        }}
                        component={ItemsAvailablePage}
                    />
                    <Drawer.Screen
                        name={NAVIGATION.addItem.drawerOrTabTitle}
                        options={{
                            drawerLabel: NAVIGATION.addItem.drawerOrTabTitle,
                            title: NAVIGATION.addItem.drawerOrTabTitle,
                            drawerIcon: ({focused, size}) => (
                                <Ionicons name={NAVIGATION.addItem.icon} size={size}/>
                            ),
                        }}
                        component={AddItemPage}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
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


export default Navigation;


