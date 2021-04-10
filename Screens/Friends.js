import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';


//This is where the user sees their list of friends
const Friends = () => {

    return (
        <View>
            <View style={styles.friendView}>
                <Text style={styles.nameText}>John Smith</Text>
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
            <View style={styles.endButtonView}>
                    <TouchableOpacity style={styles.endButton}>
                        <Text style={styles.endButtonText}>Manage Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.endButton}>
                        <Text style={styles.endButtonText}>Add Friends</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

//Styles go here
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
})

export default Friends;