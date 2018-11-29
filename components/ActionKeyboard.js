import React from 'react'
import { StyleSheet, Button, View, Keyboard, TextInput } from 'react-native'


export default class ActionKeyboard extends React.Component {

    render() {
        return <View style={{ margin: 20 }} >
            <TextInput
                style={styles.text}
                placeholder="Tapez votre réponse"
                onChangeText={(text) => { this.props.handler(text, this.props.step.answers) }}
                onSubmitEditing={Keyboard.dismiss}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: "blue"
    }
})