import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchCards from './screens/SearchCards.js'
import Decks from './screens/Decks.js'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import SearchCardsStackNavigator from './screens/SearchCardsStackNavigator';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Account from './screens/Account';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

const tabNavigator = createBottomTabNavigator({
    Search: SearchCardsStackNavigator,
    Decks: Decks,
    Account: Account
});

const NavigatorContainer = createAppContainer(tabNavigator);

export class NavigatorClass extends React.Component {

    render() {
        return (
            <NavigatorContainer />
        );
    }
}

const RootStackNavigator = createAppContainer(createStackNavigator(
    {
        SignIn: {screen: SignIn},
        SignUp: {screen: SignUp},
        Main: {screen: NavigatorClass, 
            navigationOptions: ({ navigation }) => ({
                header: null
              })
        }
    }
))

export default class App extends React.Component {

    constructor() {
        super();
        console.log("Configuring Amplify");
        Amplify.configure(aws_exports);
    }

    render() {
        return (
            <RootStackNavigator />
        );
    }
} 
