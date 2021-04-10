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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const AppNavigator = createStackNavigator({
    Home: Home,
    Main: Main,
    MyCalendar: MyCalendar,
    Settings: Settings,
    Friends: Friends
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

