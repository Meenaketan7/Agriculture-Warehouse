import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import FoodForm from '../FoodForm';
import FoodList from '../FoodList';
const Screen2 = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fdfbf1',
      }}>
      <Text
        style={{
          top: 30,
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          padding: 10,
          color: 'green',
        }}>
        List Of Vegetables
      </Text>
      <>
        <FoodForm />
        <FoodList />
      </>
    </SafeAreaView>
  );
};
export default Screen2;
