import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchCards from './screens/SearchCards.js'
import Decks from './screens/Decks.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SearchCardsStackNavigator from './screens/SearchCardsStackNavigator'

const tabNavigator = createBottomTabNavigator({
    Search: SearchCardsStackNavigator,
    Decks: Decks
});

export default createAppContainer(tabNavigator);
