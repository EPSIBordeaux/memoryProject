import React from 'react'
import { Button, StyleSheet, View, Text, ScrollView, AsyncStorage } from 'react-native'

const data = require("./assets/story/story.json")
import './Game.js'
import {createAppContainer, createStackNavigator} from "react-navigation";
export default class Home extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.titre}>Vous êtes le héro !</Text>
                    <Text style={styles.text}>Bienvenue !

                        Vous vous apprêtez à vivre une histoire palpitante dans la peau d’un ingénieur en neuroscience ! Munissez-vous de votre logique ainsi que votre mémoire avant de commencer l’aventure, cela vous sera indispensable. Chaque action vous entraînera vers une nouvelle histoire. Vos actions ainsi que votre capacité à résoudre les énigmes auront des conséquences définitives ou non sur votre progression.


                        Faite donc bien attention aux choix que vous effectuerez.


                    </Text>
                </View>
                <View style={styles.startPlaying} >
                    <Button
                        style={styles.buttonReset}
                        onPress={() =>{  navigate('Game'); }}
                        title={'Commencer à jouer'}
                        color={'#9c000f'}
                    />
                </View>
            </View>

        )
    }
}
const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
});

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#202020',

    },
    container: {
   //     paddingVertical: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    titre: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: '#fff',
        margin: 30,
        textAlign: 'justify'
    },
    startPlaying: {
        margin: 30
    }
})
