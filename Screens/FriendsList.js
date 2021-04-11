import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ListOfFriends from './List/ListOfFriends';
import firebase from 'firebase'


// this is where the user sees and manages their list of friends
export default class List extends Component {
  state = {
    friends: []
  };

  userFriends = 'userFriends/' + '' + firebase.auth().currentUser.email.replace(".","");

  componentDidMount() {
    firebase.database().ref(this.userFriends).on('value', snapshot => {
      let data = snapshot.val();
      let friends = Object.values(data);
      this.setState({ friends });
    });
  }

  render() {
    return (
      <View style={styles.container}>
            {this.state.friends.length > 0 ? (
                <View>
                    <ListOfFriends items={this.state.friends} />
                    <View style={styles.endButtonView}>
                        <TouchableOpacity style={styles.endButton}>
                            <Text style={styles.endButtonText}>Manage Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.endButton}>
                            <Text style={styles.endButtonText}>Add Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
            <View>
                <Text style={styles.emptyList}>You don't have any friends at the moment</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Friends</Text>
                </TouchableOpacity>
            </View>
            )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    width: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    fontSize: 16,
    margin: 10,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },
  emptyList: {
      fontSize: 16,
      alignSelf: 'center',
      marginTop: '50%'
  },
  endButton: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        marginLeft: 12,
        height: 40,
        borderRadius: 10,
        marginTop: 15
    },
    endButtonText: {
        color: 'white',
        fontSize: 17
    },
    endButtonView: {
        flexDirection: 'row'
    },
});