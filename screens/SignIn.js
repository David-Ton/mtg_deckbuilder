/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

import { strings } from '../resources/strings';
import { Auth } from 'aws-amplify';

export default class SignIn extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    signIn() {
        Auth.signIn(this.state.email, this.state.password)
            .then((user) => {
                this.props.navigation.navigate('Main');
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

  render() {
    return (
      <View style={styles.container}>

        <Text>{strings.signin_header}</Text>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={
            // Set this.state.email to the value in this Input box
            (value) => {
                console.log(this.state);
                this.setState({ email: value })
        }
          }
          placeholder="my@email.com"
        />
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={
            // Set this.state.email to the value in this Input box
            (value) => {
                console.log(this.state);
                this.setState({ password: value })
        }
          }
          placeholder="p@ssw0rd123"
          secureTextEntry
        />
            <Button
                title="Sign In"
                onPress={this.signIn.bind(this)}
            />
            <Button
                title="Create a New Account"
                onPress={() => {
                    this.props.navigation.navigate('SignUp');
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
