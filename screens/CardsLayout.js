/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import { Overlay } from 'react-native-elements';

export default class CardsLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsData: [],
            overlayVisible: false
        }
    }

    componentDidMount() {
        responseData = this.props.navigation.getParam('cardsDataString', '');
        //console.log(responseData);

        if (responseData.length != 0) {
            data = JSON.parse(responseData);
            cards = data["cards"];

            cardsData = [];
            cardsList = [];
            //console.log("Number of cards: " + cards.length);
            for (let i = 0; i < cards.length; i++) {
                inList = false;
                for (let j = 0; j < cardsList.length; j++) {
                    if (cardsList[j]["name"] == cards[i]["name"]) {
                        inList = true;
                        break;
                    }
                }
                if (!inList && cards[i]["imageUrl"]) {
                    cardsList.push(cards[i]);
                }
            }

            numRows = Math.ceil(cardsList.length / 3);
            //console.log("Number of rows: " + numRows);

            for (let i = 0; i < numRows; i++)
            {
                buildArray = [];
                for (let j = 0; j < 3; j++) {
                    if (3 * i + j < cardsList.length) {
                        buildArray.push(cardsList[3 * i + j]);
                    }
                }
                //console.log("Build Array: " + buildArray);
                cardsData.push(buildArray);
            }

           //console.log("Cards: " + cardsList);
            //console.log("Cards array of arrays: " + cardsData);
            this.setState({
                cardsData: cardsList
            });
        }
    }

  render() {
    
        return (
        <View style={styles.containerMain}>

            <Overlay
                isVisible={this.state.overlayVisible}
                windowBackgroundColor="rgba(0, 0, 0, .8)"
                overlayBackgroundColor="rgba(0, 0, 0, 0)"
                width="auto"
                height="auto"
                onBackdropPress={() => {
                    this.setState({overlayVisible: false})
                }
            }
            >
                <Image
                    style={styles.overlayImage}
                    source={{uri: this.state.overlayImageUri}}
                />
            
            </Overlay>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>Search Results</Text>
            </View>
            <FlatList
                data={this.state.cardsData}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                
                        return (
                            <TouchableOpacity style={this.cardRowContainer}
                            onPress={() => {
                                console.log(item["name"]);
                                this.setState({
                                    overlayVisible: true,
                                    overlayImageUri: item["imageUrl"]
                                })
                            }}
                            >
                                    <Image 
                                    style={styles.image}
                                    source={{uri: item["imageUrl"]}}
                                    />   
                            </TouchableOpacity>
                        );
                    
                }}
            />
        </View>
        );
        
  }
}

const styles = StyleSheet.create({
  containerMain: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
  },
  header: {
      fontSize: 20
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  cardRowContainer: {
      flexDirection: 'row',
      marginBottom: 20
  },
  image: {
      width: 200,
      height: 200,
      resizeMode: 'contain'
  },
  overlayImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
  overlayWindow: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }
});
