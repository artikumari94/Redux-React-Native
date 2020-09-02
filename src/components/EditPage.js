import React,{Component} from 'react';
import {
    View, Text, StyleSheet, FlatList, Image, Button,
    TextInput, UIManager, Animated, Dimensions, Keyboard, BackHandler, Alert,
    ToastAndroid, StatusBar,Modal
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EditPage extends Component{

    constructor(props){
        super(props);

    }
    state = {

    }

    render(){
        return(
            <View>
                <Text>EditText</Text>
            </View>
        )
    }

}