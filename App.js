/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import EditPage from './src/components/EditPage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import { Switch } from 'react-native-paper';

//const store = createStore(reducer)
const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  console.log("reducer",reducer)
  console.warn("action",action)
  console.warn(JSON.stringify(action));
  switch (action.type) {
      case 'INCREASE_COUNTER':
          return { counter: state.counter + 1 }
      case 'DECREASE_COUNTER':
          return { counter: state.counter - 1 }
  }
  
  return state
  

}



const store = createStore(reducer)

//const Stack = createStackNavigator();
class App extends Component {

  render() {
      return (
          <Provider store={store}>
              <Home />
          </Provider>
      );
  }
}
 
export default App; 
  
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //      <Stack.Screen name = "AllList" component={Home}
  //         options={{
  //           headerTintColor:'white',
  //           headerStyle:{
  //              backgroundColor:'#538cc6'
  //           },
  //           headerTitleStyle: { fontFamily: 'FuturaMedium' ,alignSelf:'center',},
  //            headerShown: true
  //           // headerTitleStyle: { fontFamily: 'FuturaMedium' },
  //          }}
  //      />
  //       <Stack.Screen name = "EditPage" component={EditPage}
  //          options={{
  //           headerTitleStyle: { fontFamily: 'FuturaMedium' ,alignSelf:'center'},
  //           headerShown: true
  //           }}
  //      />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
//};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

