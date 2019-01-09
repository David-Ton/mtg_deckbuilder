/* @flow */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchCards from './SearchCards';
import CardsLayout from './CardsLayout';

const Navigator = createStackNavigator({
    Search: SearchCards,
    CardsLayout: CardsLayout
});

const Container = createAppContainer(Navigator);

export default class SearchCardsStackNavigator extends Component {
  render() {
    return (
      <Container />
    );
  }
}

