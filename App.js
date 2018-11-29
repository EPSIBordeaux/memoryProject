import React from 'react'
import { Button, StyleSheet, View, Text, AsyncStorage } from 'react-native'

import DisplayComponent from './components/DisplayComponent'
import ActionComponent from './components/ActionComponent'

const data = require("./assets/story/story.json")

export default class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentId: 0,
            progressionStep: ''
        };

        this.handler = this.handler.bind(this);
        this.setProgressionStep = this.setProgressionStep.bind(this)
    }

    handler(stepId) {
        this.setState({
            currentId: stepId
        })
    }

    setProgressionStep(value) {
        console.log("updated", value.toString())
        AsyncStorage.setItem('progressionStep', value);
        this.setState({progressionStep: value});
    }
    getCurrentId() {
        return this.state.currentId;
    }

    findById(id) {
        return data.steps[id];
    }


    componentDidMount = () => {
        AsyncStorage.getItem('progressionStep').then((value) => {
            this.setState({'currentId': value,  'progressionStep': value});
            console.log(this.state.progressionStep)
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ margin: 20 }} >
                    <Button
                        onPress={() => {
                            this.handler(0);
                            this.setProgressionStep('0')
                        }}
                        title={'reset'}
                        color={'#1473e6'}
                    />
                </View>
                <Text style={styles.text}>Jeu - Vous êtes le héros !</Text>
                <DisplayComponent step={this.findById(this.getCurrentId())}/>
                {this.findById(this.getCurrentId()).answers.map((object, i) => {
                    return <ActionComponent step={object} key={i} index={i} handler={this.handler} setProgressionStep={this.setProgressionStep} />
                })}
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
