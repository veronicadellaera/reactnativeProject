
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from '../tabs/BottomTabNavigation';
import NAVIGATION from '../constants';

function getHeaderTitle(route: any) {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch (routeName) {
        case NAVIGATION.home.routeId:
            return NAVIGATION.home.title;
        case NAVIGATION.availableItems.routeId:
            return NAVIGATION.availableItems.title;
        case NAVIGATION.addItem.routeId:
            return NAVIGATION.addItem.title;
        default:
            return NAVIGATION.home.title;
    }
};

class HomeScreenStack extends Component {

    myProp: any
    constructor(props: any) {
        super(props);
        this.myProp = props;
    }

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName={NAVIGATION.home.routeId}>
                <Stack.Screen name="BottomTabStack" component={BottomTabNavigation}
                    options={(route: any) => ({
                        headerTitle: getHeaderTitle(route),
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                        
                    })}
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


export default HomeScreenStack;
