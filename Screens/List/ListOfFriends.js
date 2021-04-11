import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


// this is not a screen, but to map the list of the user's friends and display them in Friends.js
export default class ListOfFriends extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              {/* <Text style={styles.itemtext}>{item}</Text> */}
                <View style={styles.friendView}>
                    <Text style={styles.nameText}>{item.replace("@gmailcom","").toUpperCase()}</Text>
                    <Text style={styles.tagText}>Tags: Co-worker, Friend</Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.scheduleButton}>
                            <Text style={styles.scheduleText}>View Agenda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatButton}>
                            <Text style={styles.chatText}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moreButton}>
                            <Text style={styles.moreText}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row'
    },
    chatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        backgroundColor: 'black',
        height: 35,
        borderRadius: 10,
        marginLeft: 10
    },
    chatText: {
        fontSize: 17,
        color: 'white'
    },
    friendView: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: 'lightgrey',
        margin: 5,
        borderRadius: 5
    }, 
    moreButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        backgroundColor: 'black',
        height: 35,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    moreText: {
        fontSize: 17,
        color: 'white'
    },
    nameText: {
        marginLeft: 10,
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }, 
    scheduleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        backgroundColor: 'black',
        height: 35,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10
    }, 
    scheduleText: {
        fontSize: 17,
        color: 'white'
    },
    tagText: {
        fontStyle: 'italic',
        marginLeft: 10,
        marginBottom: 5
    }
});