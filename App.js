import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import DisplayComponent from './components/DisplayComponent'
import ActionComponent from './components/ActionComponent'
import ActionKeyboard from './components/ActionKeyboard'

const data = require("./assets/story/story.json")

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      currentId: 0
    }

    this.handler = this.handler.bind(this)
    this.keyBoardHandler = this.keyBoardHandler.bind(this)
  }

  handler(stepId) {
    this.setState({
      currentId: stepId
    })
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

  render() {

    let action = undefined;

    const currentAction = this.findById(this.getCurrentId());

    switch (currentAction.type) {
      case "button":
        action = currentAction.answers.map((object, i) => {
          return <ActionComponent step={object} key={i} index={i} handler={this.handler} ></ActionComponent>
        });
        break;
      case "keyboard":
        action = <ActionKeyboard step={currentAction} handler={this.keyBoardHandler}></ActionKeyboard>;
        break;
      default:
        action = currentAction.answers.map((object, i) => {
          return <ActionComponent step={object} key={i} index={i} handler={this.handler} ></ActionComponent>
        });
        break;
    }

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Jeu - Vous êtes le héro !</Text>
          <DisplayComponent step={currentAction}></DisplayComponent>
          {action}
        </View>
      </ScrollView>
    )
  }
}

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
  }
})
