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
import FriendsList from './Screens/FriendsList';
// import { StyleSheet, Text, View } from 'react-native';

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
  apiKey: "AIzaSyDloVC7ynp9ulboB4w8vjemJd6m6BfP11Y",
  authDomain: "home-calendar-7f582.firebaseapp.com",
  databaseURL: "https://home-calendar-7f582-default-rtdb.firebaseio.com",
  projectId: "home-calendar-7f582",
  storageBucket: "home-calendar-7f582.appspot.com",
  messagingSenderId: "850279712728",
  appId: "1:850279712728:web:4ec9277e71f22fb7e054ad",
  measurementId: "G-XGQD8SC1TK"
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
    FriendsList: FriendsList
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

