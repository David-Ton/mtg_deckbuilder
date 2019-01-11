/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';

export default class Account extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Sign Out"
            onPress={() => {
                Auth.signOut()
                    .then(() => {
                        this.props.navigation.navigate('SignIn');
                    })
                    .catch((error) => {
                        alert(error);
                        console.log(error);
                    })
            }}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
});
