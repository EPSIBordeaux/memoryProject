import React from 'react'
import { StyleSheet, View } from 'react-native'

import ItemComponent from './components/ItemComponent'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ItemComponent name="coucou"></ItemComponent>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
