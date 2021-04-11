import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import firebase from 'firebase';

// import { Button } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';

//here is what the user sees after login in
/**
 * The user can:
 * 1. view/update their calendar,
 * 2. view list of friends,
 * 3. view settings
 */

class Main extends React.Component {

    goToMyCalendar = (navigate) => {
        navigate('MyCalendar')
    }

    gotToSettings = (navigate) => {
        navigate("Settings")
    }

    goToFriends = (navigate) => {
        navigate('FriendsList')
    }

    username = firebase.auth().currentUser.email.replace("@gmail.com", "").toUpperCase();

    render() {
      return (
        <View style={styles.wrapView}>
            <Text style={styles.welcomeText}>Welcome to Home-Calendar {this.username}!</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}
                onPress={()=>this.goToMyCalendar(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>View My Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={()=>this.goToFriends(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>My Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={()=>this.gotToSettings(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    button: {
        // textAlign: 'center',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        // marginLeft: 10,
        marginBottom: 10,
        backgroundColor: 'purple'
        // marginRight: 10,
        // width: '90%',

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    buttonView: {
        // flexDirection: 'column',
        flex: 1,
        // alignItems: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10
    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40
    },
    wrapView: {
        flex: 1,
        backgroundColor: '#b0eced'
    }
})

export default Main;