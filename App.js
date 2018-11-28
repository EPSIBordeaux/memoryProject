import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import StepComponent from './components/StepComponent'

const data = require("./assets/story/story.json")

export default class App extends React.Component {
  render () {
    let firstStep = data.steps[0];
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TEST</Text>
        <StepComponent step={firstStep}></StepComponent>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
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
