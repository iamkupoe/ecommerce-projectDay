import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JacketProfile from './JacketProfile';



export default function App() {
  return (
    <View style={styles.container}>
      <JacketProfile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
    marginHorizontal:5
  },
});
