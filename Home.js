import React from 'react'
import { Button, StyleSheet, View, Text, ScrollView, AsyncStorage } from 'react-native'

const data = require("./assets/story/story.json")
import './Game.js'
import {createAppContainer, createStackNavigator} from "react-navigation";
class Home extends React.Component {


    render() {
      const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
            <Text style={styles.text}>Jeu - Vous êtes le héro !</Text>
        </View>
          <View style={styles.buttonReset} >
              <Button
                 onPress={() =>{  navigate('Game'); }}
                  title={'Commencer à jouer'}
                  color={'#9c000f'}
              />
          </View>
      </ScrollView>

    )
  }
}
const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
});
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#202020',
  },
  container: {
    paddingVertical: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  buttonReset: {
      marginRight: 20,
      marginLeft: 20,
  }
})
