import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';


//This is where the user manages their friends
class ManageFriends extends React.Component {
    render() {
      return (
        <View style={styles.wrapView}>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Create Group Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Schedule Group Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Listen to Music With a Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Schedule Gaming Night</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Notify Availability</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Make Schedule Private for... (select friends)</Text>
            </TouchableOpacity>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 45,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 10,
        marginTop: 15

    },
    buttonsText: {
        fontSize: 17,
        color: 'white',
        margin: 10
    },
    wrapView: {
        flex: 1,
        backgroundColor: 'lightgrey'
    }
})

export default ManageFriends;