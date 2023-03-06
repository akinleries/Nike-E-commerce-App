import { StatusBar } from 'expo-status-bar';
import ProductsScreens from './src/screens/ProductsScreens';
import ProductDetailsScreens from './src/screens/ProductDetailsScreens';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>

      {/* <ProductsScreens /> */}
      <ProductDetailsScreens />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  
});
