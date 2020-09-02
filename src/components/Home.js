import React, { Component } from 'react';
import {
    View, Text, StyleSheet, FlatList, Image, Button,
    TextInput, UIManager, Animated, Dimensions, Keyboard, BackHandler, Alert,
    ToastAndroid, StatusBar, Modal
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

import { connect } from 'react-redux';

  class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});





// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         data: [],
//         isVisible: false,
//         editData:false
//     }

//     componentDidMount() {
//         this.getList();
//     }

//     async getList() {
//         let resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: "GET",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',

//             },
//         }).then((response) => response.json())
//             .then((json) => {
//                 //  console.warn("response",json)
//                 this.setState({ data: json })
//                 console.warn("data", this.state.data)
//                 // if (json.status == true) {
//                 //     // this.setState({ catchupRequests: json.successObject.data })
//                 //     this.setState({ activeMeetups: json.successObject.data })
//                 //     // console.warn("getWebinars", json.successObject.data)
//                 // }
//                 // else {
//                 //     ToastAndroid.showWithGravity(
//                 //         json.errorDescription,
//                 //         ToastAndroid.SHORT,
//                 //         ToastAndroid.CENTER
//                 //     );
//                 // }
//             })
//             .catch((error) => {
//                 ToastAndroid.showWithGravity(
//                     'Connection error!',
//                     ToastAndroid.SHORT,
//                     ToastAndroid.CENTER
//                 );
//             });

//     }

//     render() {
//         return (
//             <View style={{ backgroundColor: '#538cc6' }}>
//                 <FlatList
//                     data={this.state.data}
//                     renderItem={({ item }) => (
//                         <Card style={{ backgroundColor: '#0088cc', marginBottom: 8, marginTop: 8, marginHorizontal: 10, marginRight: 10, borderRadius: 30, borderStartColor: '#ff0000' }} >

//                             <View style={{ marginBottom: 8, marginTop: 8, marginHorizontal: 10, marginRight: 10 }}>

//                                 <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: 20, margin: 5 }}>{item.title}</Text>
//                                 <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 12, margin: 5 }}>{item.body}</Text>
//                                 <View style={{ marginStart: 70, marginRight: 70, marginTop: 20, marginBottom: 20 }}>
//                                     <Button title="Edit" color="#f5424e" onPress={() => { this.setState({ isVisible: true }) }} />
//                                 </View>

//                                 <View>
//                                     <Modal visible={this.state.isVisible}>
//                                         <View style={{ margin: 30, justifyContent: 'center' }}>
//                                             <Text style={{ fontSize: 25, textAlign: 'center' }}>Edit Data</Text>
//                                             <TextInput style={styles.textInput} placeholder="Title Name"
//                                                 onChangeText={(val) => textInputChange(val)}>
//                                             </TextInput>
//                                             <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Body"
//                                                 onChangeText={(val) => handlePasswordChange(val)}>
//                                             </TextInput>
//                                             <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
//                                                 <Button title="Close " onPress={() => {
//                                                     this.setState({ isVisible: !this.state.isVisible })
//                                                 }} />
//                                             </View>

//                                         </View>
//                                     </Modal>
//                                 </View>
//                             </View>

//                         </Card>

//                     )}

//                 />

//             </View>

//         )
//     }



// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 0
//     }, text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     headerBar: {
//         width: '100%',
//         height: 55,
//         backgroundColor: '#fff',
//     },
//     header_style: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',

//     },
//     headers: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignContent: 'center'

//     },
//     textStyle: {
//         marginTop: 10,
//         alignSelf: 'center',
//         color: '#5b3937',
//         fontWeight: 'bold',
//         fontSize: 20,

//     },
//     textInput: {
//         marginTop: 10,
//         borderColor: '#5b3937',
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderRightWidth: 0,
//         borderTopWidth: 0,
//         marginLeft: 30,
//         marginRight: 30,
//         marginBottom: 30,
//         textAlign: 'center',
//         fontSize: 20,
//         // backgroundColor: "#fff"
//     },

// })


