import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, FlatList, Button, ScrollView } from 'react-native';
import {strings} from '../resources/strings';
import { CheckBox } from 'react-native-elements';
import SearchFieldsComponent from '../components/SearchFieldsComponent'

class SearchCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      type: "Select",
      subtypes: [],
      rarity: "Select",
      colors: {
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false
      },
      text: "",
      power: "",
      toughness: "",
      CMC: ""
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
          baseRequestURL = baseRequestURL + "?name=" + this.state.cardName;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&name=" + this.state.name;
      }
    }
    if (this.state.type != "Select")
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
      if (this.state.subtypes.length != 0) {
          if (!paramsAdded) {
              baseRequestURL = baseRequestURL + "?subtypes=";
              paramsAdded = true;
          }
          else {
              baseRequestURL = baseRequestURL + "&subtypes=";
          }

          this.state.subtypes.forEach((value, index, array) => {
            if (value != "Select")
            {
              baseRequestURL = baseRequestURL + value;
              if (index != array.length - 1) {
                  baseRequestURL = baseRequestURL + "%2C";
              }
            }
          });
      }
    if (this.state.power)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?power=" + this.state.power;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&power=" + this.state.power;
      }
    }
    if (this.state.toughness)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?toughness=" + this.state.toughness;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&toughness=" + this.state.toughness;
      }
    }
    if (this.state.CMC)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?cmc=" + this.state.CMC;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&cmc=" + this.state.CMC;
      }
    }
    if (this.state.loyalty)
    {
      if (!paramsAdded)
      {
          baseRequestURL = baseRequestURL + "?loyalty=" + this.state.loyalty;
          paramsAdded = true;
      }
      else
      {
        baseRequestURL = baseRequestURL + "&loyalty=" + this.state.loyalty;
      }
    }


    colorBuildString = "";
    trueColorsArray = [];
    
    for (let key in this.state.colors)
    {
      if (this.state.colors[key])
      {
        trueColorsArray.push(key);
      }
    }

    for (let i = 0; i < trueColorsArray.length; i++)
    {
      colorBuildString = colorBuildString + trueColorsArray[i];
      if (i != trueColorsArray.length - 1)
      {
        colorBuildString = colorBuildString + ",";
      }
    }

    if (colorBuildString.length != 0)
    {
      if (!paramsAdded)
        {
            paramsAdded = true;
            baseRequestURL = baseRequestURL + "?colors=" + colorBuildString;
        }
        else
        {
            baseRequestURL = baseRequestURL + "&colors=" + colorBuildString;   
        }

        if (this.state.rarity != "Select")
        {
          if (!paramsAdded)
          {
              baseRequestURL = baseRequestURL + "?rarity=" + this.state.rarity;
              paramsAdded = true;
          }
          else
          {
            baseRequestURL = baseRequestURL + "&rarity=" + this.state.rarity;
          }
        }
    }

    if (this.state.text)
    {
          if (!paramsAdded)
          {
              baseRequestURL = baseRequestURL + "?text=" + this.state.text;
              paramsAdded = true;
          }
          else
          {
            baseRequestURL = baseRequestURL + "&text=" + this.state.text;
          }
    }

    console.log("Request URL: " + baseRequestURL);

      fetch(baseRequestURL)
          .then((response) => {
            console.log("Response received");
              return response.json();
          })
          .then((responseJSON) => {
                
              this.props.navigation.navigate('CardsLayout', {
                  cardsDataString: JSON.stringify(responseJSON)
              });
          })
          .catch((error) => {
            console.log("Error thrown");
            console.log("Error: " + error);

          });
  }

  setStateHandler(stateObject) {
    this.setState(stateObject);
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView
      >
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

          
          <ScrollView 
          horizontal={true}
          style={styles.fieldContainer}>
            <CheckBox
            title="White"
            checked={this.state.colors.white}
            onPress={() => {
              currentColors = this.state.colors;
              currentColors.white = !currentColors.white;
              this.setState({
                colors: currentColors
              })
            }}
            />
            <CheckBox
            title="Blue"
            checked={this.state.colors.blue}
            onPress={() => {
              currentColors = this.state.colors;
              currentColors.blue = !currentColors.blue;
              this.setState({
                colors: currentColors
              })
            }}
            />
            <CheckBox
            title="Black"
            checked={this.state.colors.black}
            onPress={() => {
              currentColors = this.state.colors;
              currentColors.black = !currentColors.black;
              this.setState({
                colors: currentColors
              })
            }}
            />
            <CheckBox
            title="Red"
            checked={this.state.colors.red}
            onPress={() => {
              currentColors = this.state.colors;
              currentColors.red = !currentColors.red;
              this.setState({
                colors: currentColors
              })
            }}
            />
            <CheckBox
            title="Green"
            checked={this.state.colors.green}
            onPress={() => {
              currentColors = this.state.colors;
              currentColors.green = !currentColors.green;
              this.setState({
                colors: currentColors
              })
            }}
            />

          </ScrollView>

          <View style={styles.fieldContainer}>
            <Text>{strings.Type}</Text>
            <Picker style={{height: 50, width: 200}}
            selectedValue={this.state.type}
            onValueChange={(selectedItem, selectedItemIndex) => {
              if (selectedItem == "Select")
              {
                this.setState({
                  type: selectedItem,
                  loyalty: null,
                  power: null,
                  toughness: null
                });
              }
              else if (selectedItem == "creature")
              {
                this.setState({
                  type: selectedItem,
                  loyalty: null
                });
              }
              else if (selectedItem == "planeswalker")
              {
                this.setState({
                  type: selectedItem,
                  power: null,
                  toughness: null
                });
              }
              else if (selectedItem == "instant" || selectedItem == "sorcery" || selectedItem == "enchantment" || selectedItem == "artifact")
              {
                this.setState({
                  type: selectedItem,
                  loyalty: null,
                  power: null,
                  toughness: null,
                  subtypes: []
                });
              }
              else
              {
                this.setState({
                  type: selectedItem
                })
              }
              console.log(this.state);
            }}>
              <Picker.Item label="Select" value="Select"/>
              <Picker.Item label="Creature" value="creature"/>
              <Picker.Item label="Sorcery" value="sorcery"/>
              <Picker.Item label="Instant" value="instant"/>
              <Picker.Item label="Enchantment" value="enchantment"/>
              <Picker.Item label="Artifact" value="artifact"/>
              <Picker.Item label="Planeswalker" value="planeswalker"/>
            </Picker>
          </View>

          <View style={styles.fieldContainer}>
            <Text>{strings.Rarity}</Text>
            <Picker style={{height: 50, width: 200}}
            selectedValue={this.state.rarity}
            onValueChange={(selectedItem, selectedItemIndex) => {
              this.setState({
                rarity: selectedItem
              });
              console.log(this.state);
            }}>
              <Picker.Item label="Select" value="Select"/>
              <Picker.Item label="Mythic Rare" value="Mythic"/>
              <Picker.Item label="Rare" value="Rare"/>
              <Picker.Item label="Uncommon" value="Uncommon"/>
              <Picker.Item label="Common" value="Common"/>
            </Picker>
          </View>

          <SearchFieldsComponent state={this.state}
          handler={this.setStateHandler.bind(this)}/>



          <Button
          title={strings.Search}
          onPress={this.queryCards.bind(this)}
           />
        </View>
      </ScrollView>
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
