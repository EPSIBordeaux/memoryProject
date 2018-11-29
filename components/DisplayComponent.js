import React from 'react'

import { StyleSheet, Text, Image } from 'react-native'

export default class DisplayComponent extends React.Component {

    render() {
        const text = <Text key={0} style={styles.text}>{this.props.step.content}</Text>;

        if (this.props.step.image) {
            return ([
                text,
                <Image
                    key={1}
                    style={{ width: 200, height: 100 }}
                    source={{ uri: this.props.step.image }}
                />
            ])
        }

        return text
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        margin: 20
    }
})
