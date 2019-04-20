import React, { Component } from 'react';
import { Text, View, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'native-base';


export default class Welcome extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <ImageBackground source={{ uri: 'https://thumbs.dreamstime.com/z/male-tourist-backpack-waving-his-hand-isolated-white-background-35845466.jpg' }}
                    style={{ alignContent: 'center', justifyContent: 'center', flex: 2 }}>
                    <Button full light style={{ height: "25%" }} onPress={()=>this.props.navigation.navigate('Guide')}>
                        <Text style={{fontSize:17,fontWeight:'500',color:"#000"}}>Login As Guide</Text>
                    </Button>
                </ImageBackground>

                <ImageBackground source={{ uri: 'https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Liz/TourGuide.jpg' }}
                    style={{ alignContent: 'center', justifyContent: 'center', flex: 3 }}>
                    <Button full light style={{ height: "20%" }} onPress={()=>this.props.navigation.navigate('App')}>
                        <Text  style={{fontSize:17,fontWeight:'500',color:"#000"}}>Login As Tourist</Text>
                    </Button>
                </ImageBackground>
            </View>
        );
    }
}