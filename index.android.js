import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class MostroApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5, backgroundColor: 'powderblue'}}>
          <Text>Mostro Media</Text>
        </View>
        <View style={{ flex: 4, backgroundColor: 'steelblue'}}>
          <Text>Body</Text>
        </View>
        <View style={{ flex: 0.5, backgroundColor: 'powderblue'}}>
          <Text>Footer</Text>
        </View>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MostroApp', () => MostroApp);
