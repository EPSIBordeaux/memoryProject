import React from 'react'

import { Text } from 'react-native'

export default class ItemComponent extends React.Component {
    render () {
        return <Text>{this.props.name}</Text>
    }
}
