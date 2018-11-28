import React from 'react'

import {StyleSheet, Text} from 'react-native'
import { Button, View } from 'react-native'


export default class StepComponent extends React.Component {

    render() {
        return [
            <Text style={styles.text} stepId={this.props.id}>{this.props.step.content}</Text>,
            this.props.step.answers.map(function (object, i) {
                return <View style={{margin:20}} ><Button
                    onPress={() => {
                        console.log(object.next)
                    }}
                    title={`${i + 1} - ${object.action}`}
                    stepId={object.next}
                    key={object.next}
                    accessibilityLabel="Learn more about this purple button"
                /></View>
            })
        ]
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        margin:20
    }
})