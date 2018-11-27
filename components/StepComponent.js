import React from 'react'

import { Text } from 'react-native'
import { Button } from 'react-native'


export default class StepComponent extends React.Component {
    render() {
        return [
            <Text stepId={this.props.id}>{this.props.step.content}</Text>,
            this.props.step.answers.map(function (object, i) {
                return <Button
                    onPress={() => {
                        console.log(object.next)
                    }}
                    title={`${i + 1} - ${object.action}`}
                    color="#841584"
                    stepId={object.next}
                    key={object.next}
                    accessibilityLabel="Learn more about this purple button"
                />
            })
        ]
    }
}
