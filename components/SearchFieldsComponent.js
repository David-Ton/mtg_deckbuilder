/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  FlatList,
  TextInput,
  Button
} from 'react-native';

import {strings} from '../resources/strings.js';

export default class SearchFieldsComponent extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      subtypes: ["Select"]
    };
  }

  render() {

      if (this.props.state.type == "Select")
      {

        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.fieldContainer}>

              <FlatList
                data={this.state.subtypes}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {

                  if (index == 0)
                  {
                    return (
                      <View style={styles.fieldContainer}>
                    <Button
                    style={styles.Button}
                    title={strings.AddSubtype}
                    onPress={() => {
                      currentState = this.state;
                      currentState.subtypes.push("Select");
                      console.log(currentState.subtypes.length);
                      this.props.handler({
                        subtypes: currentState.subtypes
                      });
                      this.setState({
                        subtypes: currentState.subtypes
                      });
                    }}
                     />
                    <Text>{strings.Subtypes}</Text>
                    <Picker style={{height: 50, width: 200}}
                      selectedValue={this.state.subtypes[index]}
                      onValueChange={(value) => {
                        if (value != null)
                        {
                        currentState = this.props.state;

                        currentState.subtypes[index] = value;
                        this.props.handler({
                          subtypes: currentState.subtypes
                        });
                        this.setState({
                          subtypes: currentState.subtypes
                        });
                      }
                      }}
                      >
                      <Picker.Item label="Select" value="Select" />
                      <Picker.Item label="Vampire" value="Vampire" />
                      <Picker.Item label="Dragon" value="Dragon" />
                      <Picker.Item label="Wizard" value="Wizard" />
                      <Picker.Item label="Knight" value="Knight" />
                      <Picker.Item label="Merfolk" value="Merfolk" />

                    </Picker>
                    </View>
                )}

                  return (
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end'
                    }}>
                  <Picker style={{height: 50, width: 200}}
                    selectedValue={this.state.subtypes[index]}
                    onValueChange={(value) => {
                      currentState = this.props.state;

                      currentState.subtypes[index] = value;

                      this.props.handler({
                        subtypes: currentState.subtypes
                      });
                      this.setState({
                        subtypes: currentState.subtypes
                      });

                    }}
                    >
                    <Picker.Item label="Select" value="Select" />
                    <Picker.Item label="Vampire" value="Vampire" />
                    <Picker.Item label="Dragon" value="Dragon" />
                    <Picker.Item label="Wizard" value="Wizard" />
                    <Picker.Item label="Knight" value="Knight" />
                    <Picker.Item label="Merfolk" value="Merfolk" />
                  </Picker>
                  </View>

                )}}
               />
            </View>

            <View style={styles.fieldContainer}>
                    <Text>{strings.CMC}</Text>
                    <TextInput
                    value={this.props.state.CMC}
                    style={styles.textinput}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                      this.props.handler({
                        CMC: text
                      })
                    }}
                    />
            </View>

            <View
              style={styles.fieldContainer}
            >
              <Text>{strings.Text}</Text>
              <TextInput
                value={this.props.state.text}
                style={styles.textinput}
                onChangeText={(text) => {
                  this.props.handler({
                    text: text
                  })
                }}
              />

            </View>

          </View>
        );
      }

      else if (this.props.state.type == "creature")
      {
        return (
          <View style={styles.fieldsContainer}>

            <View style={styles.fieldContainer}>

              <FlatList
                data={this.state.subtypes}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {

                  if (index == 0)
                  {
                    return (
                      <View style={styles.fieldContainer}>
                    <Button
                    style={styles.Button}
                    title={strings.AddSubtype}
                    onPress={() => {
                      currentState = this.state;
                      currentState.subtypes.push("Select");
                      console.log(currentState.subtypes.length);
                      this.props.handler({
                        subtypes: currentState.subtypes
                      });
                      this.setState({
                        subtypes: currentState.subtypes
                      });
                    }}
                     />
                    <Text>{strings.Subtypes}</Text>
                    <Picker style={{height: 50, width: 200}}
                      selectedValue={this.state.subtypes[index]}
                      onValueChange={(value) => {
                        if (value != null)
                        {
                        currentState = this.props.state;

                        currentState.subtypes[index] = value;
                        this.props.handler({
                          subtypes: currentState.subtypes
                        });
                        this.setState({
                          subtypes: currentState.subtypes
                        });
                      }
                      }}
                      >
                      <Picker.Item label="Select" value="Select" />
                      <Picker.Item label="Vampire" value="Vampire" />
                      <Picker.Item label="Dragon" value="Dragon" />
                      <Picker.Item label="Wizard" value="Wizard" />
                      <Picker.Item label="Knight" value="Knight" />
                      <Picker.Item label="Merfolk" value="Merfolk" />

                    </Picker>
                    </View>
                )}

                  return (
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end'
                    }}>
                  <Picker style={{height: 50, width: 200}}
                    selectedValue={this.state.subtypes[index]}
                    onValueChange={(value) => {
                      currentState = this.props.state;

                      currentState.subtypes[index] = value;

                      this.props.handler({
                        subtypes: currentState.subtypes
                      });
                      this.setState({
                        subtypes: currentState.subtypes
                      });

                    }}
                    >
                    <Picker.Item label="Select" value="Select" />
                    <Picker.Item label="Vampire" value="Vampire" />
                    <Picker.Item label="Dragon" value="Dragon" />
                    <Picker.Item label="Wizard" value="Wizard" />
                    <Picker.Item label="Knight" value="Knight" />
                    <Picker.Item label="Merfolk" value="Merfolk" />
                  </Picker>
                  </View>

                )}}
               />
            </View>

            <View style={styles.fieldContainer}>
                    <Text>{strings.CMC}</Text>
                    <TextInput
                    value={this.props.state.CMC}
                    style={styles.textinput}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                      this.props.handler({
                        CMC: text
                      })
                    }}
                    />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.field}>{strings.Power}</Text>
              <TextInput
              style={styles.textinput}
              keyboardType="numeric"
              onChangeText={(text) => {
                  this.props.handler({
                    power: parseInt(text)
                  });
                  //console.log(parseInt(text));
              }}></TextInput>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.field}>{strings.Toughness}</Text>
              <TextInput
              style={styles.textinput}
              keyboardType="numeric"
              onChangeText={(text) => {
                this.props.handler({
                  toughness: parseInt(text)
              })
            }}></TextInput>
            </View>

            <View
              style={styles.fieldContainer}
            >
              <Text>{strings.Text}</Text>
              <TextInput
                value={this.props.state.text}
                style={styles.textinput}
                onChangeText={(text) => {
                  this.props.handler({
                    text: text
                  })
                }}
              />

            </View>

          </View>
        )
    }

    else if (this.props.state.type == "sorcery" || this.props.state.type == "instant" || this.props.state.type == "artifact" || this.props.state.type == "enchantment")
    {
      return (
        <View style={styles.fieldsContainer}>
          
          <View style={styles.fieldContainer}>
                  <Text>{strings.CMC}</Text>
                  <TextInput
                  value={this.props.state.CMC}
                  style={styles.textinput}
                  keyboardType='numeric'
                  onChangeText={(text) => {
                    this.props.handler({
                      CMC: text
                    })
                  }}
                  />
          </View>

          <View
            style={styles.fieldContainer}
          >
            <Text>{strings.Text}</Text>
            <TextInput
              value={this.props.state.text}
              style={styles.textinput}
              onChangeText={(text) => {
                this.props.handler({
                  text: text
                })
              }}
            />

          </View>

        </View>
      );
    }

    else if (this.props.state.type == "planeswalker")
    {
      return (
        <View style={styles.fieldsContainer}>
          
          <View style={styles.fieldContainer}>
                  <Text>{strings.CMC}</Text>
                  <TextInput
                  value={this.props.state.CMC}
                  style={styles.textinput}
                  keyboardType='numeric'
                  onChangeText={(text) => {
                    this.props.handler({
                      CMC: text
                    })
                  }}
                  />
          </View>

          <View
          style={styles.fieldContainer}>
            <Text>{strings.Loyalty}</Text>
            <TextInput
              style={styles.textinput}
              keyboardType="numeric"
              onChangeText={(text) => {
                this.props.handler({
                  loyalty: text
                })
              }}
            />
          </View>

          <View
            style={styles.fieldContainer}
          >
            <Text>{strings.Text}</Text>
            <TextInput
              value={this.props.state.text}
              style={styles.textinput}
              onChangeText={(text) => {
                this.props.handler({
                  text: text
                })
              }}
            />

          </View>

        </View>
      );
    }

      else {
        return (
          <Text>Static Content</Text>
        );
      }
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
    alignItems: 'center',
    marginBottom: 20
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  field: {
    marginRight: 10
  },
  textinput: {
    width: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  Button: {
    width: 100,
    height: 50
  }
});
