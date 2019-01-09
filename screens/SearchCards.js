import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, FlatList, Button } from 'react-native';
import {strings} from '../resources/strings';
import SearchFieldsComponent from '../components/SearchFieldsComponent'

class SearchCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      type: "creature",
      keywords: ["Flying"],
      subtypes: ["Vampire"]
    };
  }

  componentDidMount() {

  }

  queryCards() {

    paramsAdded = false;
    baseRequestURL = "https://api.magicthegathering.io/v1/cards";
    if (this.state.cardName.length != 0)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?name=" + this.state.name;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&name=" + this.state.name;
      }
    }
    if (this.state.type.length != 0)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?type=" + this.state.type;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&type=" + this.state.type;
      }
    }
    if (this.state.keywords.length != 0)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?keywords=";
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&keywords=";
      }

        this.state.keywords.forEach((value, index, array) => {
            baseRequestURL = baseRequestURL + value;
            if (index != array.length - 1) {
                baseRequestURL = baseRequestURL + "%2C";
            }
        });
      }
      if (this.state.subtypes.length != 0) {
          if (!paramsAdded) {
              baseRequestURL = baseRequestURL + "?subtypes=";
              paramsAdded = true;
          }
          else {
              baseRequestURL = baseRequestURL + "&subtypes=";
          }

          this.state.subtypes.forEach((value, index, array) => {
              baseRequestURL = baseRequestURL + value;
              if (index != array.length - 1) {
                  baseRequestURL = baseRequestURL + "%2C";
              }
          });
      }
    if (this.state.power)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?power=" + parseInt(this.state.power);
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&power=" + parseInt(this.state.power);
      }
    }
    if (this.state.toughness)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?toughness=" + parseInt(this.state.toughness);
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&toughness=" + parseInt(this.state.toughness);
      }
    }
    console.log("Request URL: " + baseRequestURL);

      fetch(baseRequestURL)
          .then((response) => {
              return response.json();
          })
          .then((responseJSON) => {
                
              this.props.navigation.navigate('CardsLayout', {
                  cardsDataString: JSON.stringify(responseJSON)
              });
          })
  }

  setStateHandler(stateObject) {
    this.setState(stateObject);
    console.log(this.state);
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
            style={styles.textinput}
            onChangeText={(text) => {
                console.log(this.state);
                this.setState({
                  cardName: text
                });
                console.log(this.state);
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
          <SearchFieldsComponent state={this.state}
          handler={this.setStateHandler.bind(this)}/>
          <Button
          title={strings.Search}
          onPress={this.queryCards.bind(this)}
           />
        </View>
      </View>
    );
  }
}

export default SearchCards;


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
  field: {
    marginRight: 10
  },
  textinput: {
    width: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
