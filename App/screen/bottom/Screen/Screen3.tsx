import {View, Text} from 'react-native';
import React from 'react';
import ProductList from '../../../components/ProductLIst';


const Screen3 = ({navigation}:{navigation:any}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}>
      <ProductList/>
        
    </View>
  );
};

export default Screen3;