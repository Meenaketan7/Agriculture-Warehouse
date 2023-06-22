
import { View, Text, SafeAreaView, Image, StyleSheet, ActivityIndicator} from 'react-native';
import React, { useEffect } from 'react';


const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color="#162e09" size="large"/>
      <Text style={styles.subtitle}>Welcome to My App!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
    color: '#162e09',
  },
});

export default Splash;
