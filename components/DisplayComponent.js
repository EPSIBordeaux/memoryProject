import React from 'react'

import { StyleSheet, Text } from 'react-native'

export default class DisplayComponent extends React.Component {

    render() {
        return <Text style={styles.text}>{this.props.step.content}</Text>
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        margin: 20
    }
})