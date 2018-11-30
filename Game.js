import React from 'react'
import { Button, StyleSheet, View, Text, ScrollView, AsyncStorage } from 'react-native'

import DisplayComponent from './components/DisplayComponent'
import ActionComponent from './components/ActionComponent'
import ActionKeyboard from './components/ActionKeyboard'
import { createStackNavigator, createAppContainer } from "react-navigation";
const data = require("./assets/story/story.json")

export default class Game extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      currentId: 0,
      progressionStep: 0
    };

    this.handler = this.handler.bind(this);
    this.keyBoardHandler = this.keyBoardHandler.bind(this);
    this.setProgressionStep = this.setProgressionStep.bind(this)
  }

  handler(stepId) {
    this.setState({
      currentId: stepId
    })
  }

  setProgressionStep(value) {
    AsyncStorage.setItem('progressionStep', value.toString());
    this.setState({ progressionStep: value });
  }

  keyBoardHandler(text, answers) {
    answers.forEach(element => {
      if (element.action == text) {
        this.setState({
          currentId: element.next
        })
      }
    });
  }

  getCurrentId() {
    return this.state.currentId;
  }

  findById(id) {
    return data.steps[id];
  }

  componentDidMount = () => {
    AsyncStorage.getItem('progressionStep').then((value) => {
      if (value != undefined) {
        this.setState({ 'currentId': value, 'progressionStep': value });
      }
    });
  }

  render() {
    let action = undefined;

    const currentAction = this.findById(this.getCurrentId());

    switch (currentAction.type) {
      case "button":
        action = currentAction.answers.map((object, i) => {
          return <ActionComponent step={object} key={i} index={i} handler={this.handler} setProgressionStep={this.setProgressionStep} />
        });
        break;
      case "keyboard":
        action = <ActionKeyboard step={currentAction} handler={this.keyBoardHandler} setProgressionStep={this.setProgressionStep} />;
        break;
      default:
        action = currentAction.answers.map((object, i) => {
          return <ActionComponent step={object} key={i} index={i} handler={this.handler} setProgressionStep={this.setProgressionStep} />
        });
        break;
    }

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Jeu - Vous êtes le héros !</Text>
          <DisplayComponent step={currentAction} />
          {action}
        </View>
        <View style={styles.buttonReset} >
          <Button
            onPress={() => {
              this.handler(0);
              this.setProgressionStep('0')
            }}
            title={'reset'}
            color={'#9c000f'}
          />
        </View>
      </ScrollView>

    )
  }
}

const AppNavigator = createStackNavigator({
  Game: {
    screen: Game
  }
});

const styles = StyleSheet.create({
  scrollContainer: {

    flex: 1,
    backgroundColor: '#202020',

  },
  container: {
    paddingVertical: 50,
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
    bottom: 20,
    left: 20,
    textAlign: 'right',
    width: 100
  }
})
