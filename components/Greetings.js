import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greetings extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  constructor() { 
    super()
  }
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

AppRegistry.registerComponent('HelloReact', () => LotsOfGreetings);