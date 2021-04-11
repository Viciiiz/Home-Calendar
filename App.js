// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Screens/Home';
import Main from './Screens/Main';
import MyCalendar from './Screens/MyCalendar';
import Settings from './Screens/Settings';
import Friends from './Screens/Friends';
// import { StyleSheet, Text, View } from 'react-native';
import test from './Screens/test'

import firebase from 'firebase';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const firebaseConfig = { // insert your key below
  apiKey: 'AIzaXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
  databaseURL: 'rnfirebXXX-XXXX.firebaseapp.com',
  projectId: 'rnfirebase-XXXX',
  storageBucket: 'rnfirebase-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX'
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppNavigator = createStackNavigator({
    Home: Home,
    Main: Main,
    MyCalendar: MyCalendar,
    Settings: Settings,
    Friends: Friends,
    test: test
},
{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

