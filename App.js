import * as React from 'react';
import PickImage from './screens/camera.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
    <View style={styles.container}>
      <PickImage/>
    </View>
  );  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
