import React from 'react'
import { Button, StyleSheet, View, Text, ScrollView, AsyncStorage } from 'react-native'

const data = require("./assets/story/story.json")
import './Game.js'

import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from "./Home";

import Game from "./Game";


const AppNavigator = createStackNavigator({
        Home: Home,
        Game: Game,
    },
    {
        headerMode: 'none',
    });
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer>
            <ScrollView >
            </ScrollView>
        </AppContainer>;
    }
}
