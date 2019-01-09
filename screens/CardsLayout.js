/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';


export default class CardsLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsData: []
        }
    }

    componentDidMount() {
        responseData = this.props.navigation.getParam('cardsDataString', '');
        console.log(responseData);

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

            console.log("Cards: " + cardsList);
            //console.log("Cards array of arrays: " + cardsData);
            this.setState({
                cardsData: cardsData
            });
        }
    }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Search Results</Text>
        </View>
        <FlatList
            data={this.state.cardsData}
            extraData={this.state}
            renderItem={({item, index}) => {

                if (this.state.cardsData[index].length == 1)
                {
                    console.log("URL for item 0 at array index " + index + item[0]["imageUrl"]);
                    return (
                        <View style={this.cardRowContainer}>
                            <Text>
                                <Image 
                                style={styles.image}
                                source={{uri: item[0]["imageUrl"]}}/>
                            </Text>
                        </View>
                    );
                }

                if (this.state.cardsData[index].length == 2)
                {
                    console.log("URL for item 0 at array index " + index + item[0]["imageUrl"]);
                    console.log("URL for item 1 at array index " + index + item[1]["imageUrl"]);

                    return (
                        <View style={this.cardRowContainer}>
                            <Text>
                                <Image 
                                style={styles.image}
                                source={{uri: item[0]["imageUrl"]}}/>
                                <Image 
                                style={styles.image}
                                source={{uri: item[1]["imageUrl"]}}/>
                            </Text>
                        </View>
                    );
                }

                if (this.state.cardsData[index].length == 3)
                {
                    console.log("URL for item 0 at array index " + index + item[0]["imageUrl"]);
                    console.log("URL for item 1 at array index " + index + item[1]["imageUrl"]);
                    console.log("URL for item 2 at array index " + index + item[2]["imageUrl"]);

                    return (
                        <View style={this.cardRowContainer}>
                            <Text>
                                <Image 
                                style={styles.image}
                                source={{uri: item[0]["imageUrl"]}}/>
                                <Image 
                                style={styles.image}
                                source={{uri: item[1]["imageUrl"]}}/>
                                <Image 
                                style={styles.image}
                                source={{uri: item[2]["imageUrl"]}}/>
                            </Text>
                        </View>
                    );
                }
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
      marginBottom: 10  
  },
  image: {
      width: 80,
      height: 100
  }
});
