import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Button } from 'native-base';
// import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';


//This is where the user accesses their calendar
/**
 * users can:
 * 1. view their calendar
 * 2. change the display of their calendar
 * 3. modify the events in their calendar
 */
class MyCalendar extends React.Component {

    

    render() {
      return (
        <View>
            {/* <Text>Welcome to the your calendar! </Text> */}
            <Calendar/>
            <View styles={styles.container}>
                {/* <Button styles={styles.plusButton}><Text style={styles.plusText}>+</Text></Button> */}
            </View>
            <View>

            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    container: {

    },
    plusButton: {
        // flex: 1,
        backgroundColor: 'green',
        borderRadius: 50,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: 'green'
        // alignItems: 'flex-end',
    },
    plusText: {
        fontSize: 25,
        padding: 20,
        color: 'white'
    },
    
})

export default MyCalendar;