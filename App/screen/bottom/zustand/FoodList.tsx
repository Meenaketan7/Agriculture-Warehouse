import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import useCourseStore from './FoodStore';

const FoodList: React.FC = () => {
  const { vegetables, removeVegetable, toggleVegetableStatus } = useCourseStore((state) => ({
    vegetables: state.vegetables,
    removeVegetable: state.removeVegetable,
    toggleVegetableStatus: state.toggleVegetableStatus,
  }));

  return (
    <View style={{padding:10, flex: 1, justifyContent:'center'}}>
      <FlatList
        data={vegetables}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.foodItem,
              { backgroundColor: item.stock ? '#00FF0044' : 'white' },
            ]}
            onPress={() => toggleVegetableStatus(item.id!)}
          >
            <View style={styles.checkboxContainer}>
              <Text style={{color:'black'}}>{item.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>  removeVegetable(item.id!)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id!.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  checkboxContainer: {
    flex: 1,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default FoodList;