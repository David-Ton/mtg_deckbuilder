import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import {strings} from '../resources/strings.js';

export default class SearchCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      type: ""
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <View style={{alignItems: 'center', marginVertical: 40}}>
          <Text>{strings.search_header}</Text>
        </View>
        <View style={styles.fieldsContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text>{strings.CardName}</Text>
            <TextInput
            onChangeText={(text) => {
                this.setState({
                  cardName: text
                });
                console.log(text);
            }}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text>{strings.Type}</Text>
            <Picker style={{height: 50, width: 200}}
            selectedValue={this.state.type}
            onValueChange={(selectedItem, selectedItemIndex) => {
              this.setState({
                type: selectedItem
              });
              console.log(this.state);
            }}>
              <Picker.Item label="Creature" value="creature"/>
              <Picker.Item label="Sorcery" value="sorcery"/>
              <Picker.Item label="Instant" value="instant"/>
              <Picker.Item label="Enchantment" value="enchantment"/>
              <Picker.Item label="Artifact" value="artifact"/>
              <Picker.Item label="Planeswalker" value="planeswalker"/>
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  textinput: {
    width: 100
  }
});
