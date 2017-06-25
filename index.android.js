import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import { Button, Card, Icon } from 'react-native-material-design';

export default class MostroApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.nav}>
          <Text style={styles.titleMostro}>Mostro Media</Text>
        </View>
        <ScrollView style={{ flex: 4, backgroundColor: '#363636'}}>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button
                          text='Button A' 
                          value="ACTION" />
                    </Card.Actions>
                </Card>                                                                                
        </ScrollView>               
      </View>
    );
  }
}



const styles = StyleSheet.create({
  nav:{
    backgroundColor: '#E8540D',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3
  },
  titleMostro:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
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
