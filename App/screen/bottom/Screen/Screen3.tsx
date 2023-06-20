import {View, Text} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}:{navigation:any}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        Screen3
      </Text>
    </View>
  );
};

export default Screen3;