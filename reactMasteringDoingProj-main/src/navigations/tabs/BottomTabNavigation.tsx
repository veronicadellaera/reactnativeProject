import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from '../../screens/HomePage/HomePage';
import AddItemPage from '../../screens/AddItemPage/AddItemPage';
import ItemsAvailablePage from '../../screens/ItemsAvailablePage/ItemsAvailablePage';
import NAVIGATION from "../constants";


function BottomTabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        // initialRouteName={NAVIGATION.home.routeId}
        // screenOptions={{
        //   tabBarActiveTintColor: 'tomato',
        //   tabBarInactiveTintColor: 'gray',
        //   headerStyle: {
        //     backgroundColor: '#e0e0e0',
        //   },
        // }}
        >
        <Tab.Screen name={NAVIGATION.home.title} component={HomePage} />
        <Tab.Screen name={NAVIGATION.availableItems.routeId} component={ItemsAvailablePage}/>
        <Tab.Screen name={NAVIGATION.addItem.routeId} component={AddItemPage} />
      </Tab.Navigator>
    );
  };

  export default BottomTabNavigation;