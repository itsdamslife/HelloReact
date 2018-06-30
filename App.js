import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bananas from "./components/ImageComponent";
import LotsOfGreetings from "./components/Greetings";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Bananas />
        <LotsOfGreetings />
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