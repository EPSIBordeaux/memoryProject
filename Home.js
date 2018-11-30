import React from 'react'
import {Button, StyleSheet, View, Text, ScrollView, AsyncStorage, Image} from 'react-native'

const data = require("./assets/story/story.json")
import './Game.js'
import {createAppContainer, createStackNavigator} from "react-navigation";

export default class Home extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.titre}>Vous êtes le héro !</Text>
                    <Text style={styles.text}>Bienvenue !

                        Vous vous apprêtez à vivre une histoire palpitante dans la peau d’un ingénieur en neuroscience !
                        Munissez-vous de votre logique ainsi que votre mémoire avant de commencer l’aventure, cela vous
                        sera indispensable. Chaque action vous entraînera vers une nouvelle histoire. Vos actions ainsi
                        que votre capacité à résoudre les énigmes auront des conséquences définitives ou non sur votre
                        progression.
                    </Text>

                    <Text style={styles.text}>
                        Faite donc bien attention aux choix que vous effectuerez.
                        Cliquez sur commencer pour démarrer la partie. Votre progression est automatiquement enregistrée et vous pouvez recommencer à tout moment en cliquant sur 'Reset'."
                    </Text>
                    <Image
                        style={{ width: 200, height: 100, marginTop: 30 }}
                        source={{ uri: "https://www.usinenouvelle.com/mediatheque/8/8/9/000162988.jpg" }}
                    />
                </View>
                <View style={styles.startPlaying}>
                    <Button
                        style={styles.buttonReset}
                        onPress={() => {
                            navigate('Game');
                        }}
                        title={'Commencer à jouer'}
                        color={'#9c000f'}
                    />
                </View>
            </ScrollView>

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
        paddingVertical: 50,
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
        marginBottom: 0,
        textAlign: 'justify'
    },
    startPlaying: {
        margin: 10
    }
})
