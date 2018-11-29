import React from 'react'

import {AsyncStorage, StyleSheet} from 'react-native'
import { Button, View } from 'react-native'


export default class ActionComponent extends React.Component {
    render() {
        return <View style={{ margin: 20 }} ><Button
            onPress={() => {
                this.props.handler(this.props.step.next);
                this.props.setProgressionStep(this.props.step.next)
            }}
            title={`${this.props.index + 1} - ${this.props.step.action}`}
            key={this.props.step.next}
            color={'#1473e6'}
            accessibilityLabel="Learn more about this purple button"
        /></View>
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        margin: 20
    }
})