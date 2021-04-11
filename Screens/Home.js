import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import firebase from 'firebase';


// this is the home screen where users login / sign-up
class Home extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = ({
          email: '',
          password: ''
        })
      }
  
      //This function is used to add a new entry to the users table in Firebase DB. 
      writeUserData = (email, name) => {
        try {
          //var database = firebase.database();
          var userIdentifier2 = String(email);
          firebase.database().ref('users/').update({
          [userIdentifier2]: {
            user: email,
            name: name
            }
          });
  
        } catch (error) {
          console.log(error.toString())
        }
      }
      
      signUpUser = (email, password) =>{
        try {
          if(this.state.password.length<6) {
            alert("Please enter at least 6 chars")
            return;
          }
          else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            
            var name2 = "none"
            var email2 = email.replace(".","");
            if(email2.includes("@gmailcom")) { 
                name2 = email.replace("@gmail.com","");
            }
            this.writeUserData(email2, name2);
          }
        } catch (error) {
          console.log(error.toString())
        }
      }
    
      loginUser = (email, password, navigate) => {
        try {
          firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) { 
          console.log(user);
          navigate('Main')
          })
        } catch (error) {
          alert("Could not log in; user or password is wrong")
          console.log(error.toString())
        }
      }
    
      forgotPassword = (email) => {
        try {
          var auth = firebase.auth();
          //var emailAddress = email;
          auth.sendPasswordResetEmail(email).then(function(user) {
            console.log('Reset email sent!');
          })
        } catch (error) {
          console.log('Error');
        }
      }


    render() {
      return (
        <View style={styles.wrapView}>
            <Text style={styles.welcomeText}>Home-Calendar</Text>
            <View style={styles.middle}>
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={(email) => this.setState({email})}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="  Email Address"
                />
                <TextInput
                    style={styles.inputPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="  Password"
                    onChangeText={(password) => this.setState({password})}
                />
                <View style={styles.buttonView}>
                    <Button style={styles.button} 
                    onPress={()=>this.loginUser(this.state.email, this.state.password,this.props.navigation.navigate)}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                    <Button style={styles.button}
                    onPress = {()=> this.signUpUser(this.state.email, this.state.password)}>
                        <Text style={styles.buttonText}>Sign-up</Text>
                    </Button>
                </View>
                <Text 
                onPress = {()=> this.forgotPassword(this.state.email)}
                style={styles.forgotText}>Forgot Password?
                {/* Should be a clickable component */}
                </Text> 
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 5,
        // aspectRatio: 7/6,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
    },
    buttonText: {
        fontSize: 17,
        color: 'white',

    },
    buttonView: {
        flexDirection:"row",
        marginLeft: 12,
        marginRight: 12,
    },
    forgotText: {
        textAlign: 'center',
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'grey',
        fontStyle: 'italic'
    },
    inputEmail: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    inputPassword: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    middle: {
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        // textAlignVertical: 'center',
        // alignSelf: 'center',
        
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 35,
        marginTop: 30,
        marginBottom: 40,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    wrapView: {
        flex: 1,
        backgroundColor: '#b0eced'

    }
})

export default Home;

