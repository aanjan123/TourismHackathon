import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon } from 'native-base';


const Headers = (props) => (
    <Header>
        <TouchableNativeFeedback onPress={() => props.onPress.goBack()}>
            <Left onPress={() => props.onPress.goBack()} >
                <Icon name={props.LeftIcon} size={30} color='#eee' />
            </Left>
        </TouchableNativeFeedback>

        <Body>
            <Title>{props.Title}</Title>
        </Body>
        <Right >
            <Icon name={props.RightIcon} size={30} color={'#eee'} />
        </Right>
    </Header>
);

export default Headers;