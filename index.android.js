import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  ToastAndroid
} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Button, Card, Icon } from 'react-native-material-design'


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  componentDidMount(){
    ToastAndroid.show('Bienvenid@',ToastAndroid.SHORT)
    ToastAndroid.show('Haz scroll y mira nuestro contenido, nuestros servicios y nuestro equipo.',ToastAndroid.LONG)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#363636' }}>
        <Text>Hola</Text>
           <TouchableHighlight 
              underlayColor="white"
              onPress={()=> navigate('Work')}>
              <View style={styles.btnCard}>
                <Text style={styles.btnCardText}>Work</Text>
              </View>
            </TouchableHighlight>                                                                                 
      </View>
    );
  }
}

class WorkScreen extends Component {
  static navigationOptions = {
    title: 'Work'
  }  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#363636' }}>
        <Text>Hola desde work</Text>             
      </View>
    );
  }
}

class TeamScreen extends Component {
  static navigationOptions = {
    title: 'Team'
  }  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#363636' }}>
        <Text>Hola desde Team</Text>             
      </View>
    );
  }
}

const MostroApp = TabNavigator({
  Home: { screen: HomeScreen },
  Work: { screen: WorkScreen },
  Team: { screen: TeamScreen }
})

export default MostroApp


const styles = StyleSheet.create({
  nav:{
    backgroundColor: '#E8540D',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
  },
  titleMostro:{
    fontFamily: 'steelfish',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  btnCard:{
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 50,
  },
  btnCardText:{
    padding: 20,
    color: 'white'
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
