import React from 'react';
import { Text, View } from 'react-native';

class Greetings extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View>
        <Greetings name='Rexxar' />
        <Greetings name='Jaina' />
        <Greetings name='Valeera' />
      </View>
    );
  }
}