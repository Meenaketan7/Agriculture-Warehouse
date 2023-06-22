import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleProp, ViewStyle } from 'react-native';
import useVegetableStore from './FoodStore';


const foodForm = () => {
  const addVegetable = useVegetableStore((state) => state.addVegetable);
  const [vegetableName, setvegetableName] = useState('');
  const handleSubmit = () => {
    if(!vegetableName) return Alert.alert('Please enter a vegetable name');
    addVegetable({
      id: Math.floor(Math.random() * 10000),
      name: vegetableName,
    });
    setvegetableName('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={vegetableName}
        onChangeText={(text) => setvegetableName(text)}
        style={styles.input}
        placeholder="Enter text"
        placeholderTextColor="gray"
      />
      <Button title="Add vegetable" onPress={handleSubmit} />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  input: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:"black",
  },
};

export default foodForm;