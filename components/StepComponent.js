import React from 'react'

import { Text } from 'react-native'

export default class StepComponent extends React.Component {
    render() {
        return [
            <Text stepId={this.props.id}>{this.props.step.content}</Text>,
            this.props.step.answers.map(function (object, i) {
                return <Text stepId={object.next} key={object.next}> {i+1} - {object.action} </Text>;
            })
        ]
    }
}
