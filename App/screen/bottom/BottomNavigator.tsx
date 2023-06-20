
import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';


const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color:tabInfo.focused ? 'purple' : 'black'}}>Screen1</Text>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color:tabInfo.focused ? 'purple' : 'black'}}>Screen2</Text>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color:tabInfo.focused ? 'purple' : 'black'}}>Screen3</Text>
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
