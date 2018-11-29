import React from 'react'
import { Button, StyleSheet, ScrollView, View, Text } from 'react-native'

import DisplayComponent from './components/DisplayComponent'
import ActionComponent from './components/ActionComponent'

const data = require("./assets/story/story.json")

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      currentId: 0
    }

    this.handler = this.handler.bind(this)
  }

  handler(stepId) {
    this.setState({
      currentId: stepId
    })
  }

  getCurrentId() {
    return this.state.currentId;
  }

  findById(id) {
    return data.steps[id];
  }

  render() {

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Jeu - Vous êtes le héro !</Text>
          <DisplayComponent step={this.findById(this.getCurrentId())}></DisplayComponent>
          {this.findById(this.getCurrentId()).answers.map((object, i) => {
            return <ActionComponent step={object} key={i} index={i} handler={this.handler} ></ActionComponent>
          })}
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
