import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchCards from './screens/SearchCards.js'
import Decks from './screens/Decks.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const tabNavigator = createBottomTabNavigator({
  Search: SearchCards,
  Decks: Decks
});

export default createAppContainer(tabNavigator);
