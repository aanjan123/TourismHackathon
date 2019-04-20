/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Header } from '@components';
import { Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Pashupatinath",
          "image": "./assets/pashupatinath.jpg",
          "description": "Pashupatinath Temple is the oldest Hindu temple in Kathmandu. It is not known for certain when Pashupatinath Temple was built. But according to Nepal Mahatmaya and Himvatkhanda, the deity here gained great fame there as Pashupati, the Lord of all Pashus, which are living as well as non-living beings."
        },
        {
          "id": 2,
          "name": "Shambhunath",
          "image": "./assets/swayambhunath.jpg",
          "description": "Shambhunath Municipality is a Town in Saptari District in the Sagarmatha Zone of south-eastern Nepal. Merging the existing Khoksar Parbaha, Shambhunath, Mohanpur, Bhangha, Basbalpur and Rampur Jamuwa village development committee this new municipality was formed on 18 May 2014.[1][2] Kathauna Bazar is now finally head office of this new municipality . At the time of the 1991 Nepal census it had a population of 5168 people living in 933 individual households.[3]"
        },
        {
          "id": 3,
          "name": "Basantapur Durbar Square",
          "image": "./assets/kathmanduDurbar.jpg",
          "description": "Known for its rich culture and arts, Basantapur is the hub for tourists and visitors. Prarthana Dixit takes you on a stroll around this mystical part of the city. Basantapur Durbar Square is the heart and soul of Basantapur. It is one of the three Durbar Squares situated in the Kathmandu valley."
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header Title="Kathmandu City" />
        <ScrollView>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Description')}>
            <CardItem cardBody>
              <ImageBackground source={require('./assets/pashupatinath.jpg')} style={{ height: 200, justifyContent: 'center', alignContent: 'center', width: null, flex: 1 }} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center', marginBottom: '-15%' }}>Pashupatinath</Text>
                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-start' }}>
                    <Icon active name="star" size={25} style={{ color: '#DAA520' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>90 Likes</Text>
                  </Button>

                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-end', marginLeft: '30%' }}>
                    <Icon active name="chatbubbles" size={25} style={{ color: '#eee' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>45 Reviews</Text>
                  </Button>
                </View>
              </ImageBackground>

            </CardItem>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Description')}>
            <CardItem cardBody>
              <ImageBackground source={require('./assets/swayambhunath.jpg')} style={{ height: 200, justifyContent: 'center', alignContent: 'center', width: null, flex: 1 }} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center', marginBottom: '-15%' }}>Shambhunath</Text>
                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-start' }}>
                    <Icon active name="star" size={25} style={{ color: '#DAA520' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>120 Likes</Text>
                  </Button>

                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-end', marginLeft: '30%' }}>
                    <Icon active name="chatbubbles" size={25} style={{ color: '#eee' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>110 Reviews</Text>
                  </Button>
                </View>
              </ImageBackground>
            </CardItem>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Description')}>
            <CardItem cardBody>
              <ImageBackground source={require('./assets/kathmanduDurbar.jpg')} style={{ height: 200, justifyContent: 'center', alignContent: 'center', width: null, flex: 1 }} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center', marginBottom: '-15%' }}>Basantapur Durbar Square</Text>
                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-start' }}>
                    <Icon active name="star" size={25} style={{ color: '#DAA520' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>70 Likes</Text>
                  </Button>

                  <Button transparent style={{ marginTop: '20%', alignSelf: 'flex-end', marginLeft: '30%' }}>
                    <Icon active name="chatbubbles" size={25} style={{ color: 'white' }} />
                    <Text style={{ fontWeight: '500', color: 'white', fontSize: 15, textAlign: 'right' }}>50 Reviews</Text>
                  </Button>
                </View>
              </ImageBackground>
            </CardItem>
          </TouchableNativeFeedback>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
