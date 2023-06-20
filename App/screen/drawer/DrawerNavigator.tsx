import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import Main from './Main';
import Screen1 from '../bottom/Screen/Screen1';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          title:'' ,
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
