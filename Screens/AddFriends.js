import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase'


//This is where the user fiends new friends
class AddFriends extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = ({
          date: '',
          email: ''
        })
      }

    // currentDate = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');

    writeUserData = (email) => {
        try {
          //var database = firebase.database();
          var userIdentifier2 = String(email);
          var pathTo = 'userFriends/' + '' + firebase.auth().currentUser.email.replace(".","")
          firebase.database().ref(pathTo).update({
          [userIdentifier2]: {
            Date: new Date().getMilliseconds(),
            user: email
            }
          });
  
        } catch (error) {
          console.log(error.toString())
        }
      }
    
    render() {
      return (
        <View>
            <Text style={styles.initialText}>Enter your friend's email address</Text>
            <TextInput
                style={styles.inputEmail}
                onChangeText={(email) => this.setState({email})}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="  Email Address"
            />
            <TouchableOpacity style={styles.sendRequestButton}
            onPress = {()=> this.writeUserData(this.state.email.replace(".",""))}>
                <Text style={styles.sendRequestText}>Send Request</Text>
            </TouchableOpacity>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    initialText: {
        marginLeft: 10,
        marginTop: 30
    }, 
    inputEmail: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white'
    }, 
    sendRequestButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'blue',
        height: 40,
        width: '90%'
    }, 
    sendRequestText: {
        fontSize: 16,
        color: 'white',
        margin: 5
    }
})

export default AddFriends;