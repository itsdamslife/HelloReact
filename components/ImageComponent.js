import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class Bananas extends React.Component {
  constructor(){
    super()
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloReact', () => Bananas);