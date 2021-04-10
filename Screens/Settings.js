import { StyleSheet, Text, View, Switch } from 'react-native';
import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';



//This is where the user manages personal settings
const Settings = () => {
  
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.wrapView}>
            <Text style={styles.welcomeText}>Personal Settings</Text>
            <View style={styles.themeView}>
                <Text style={styles.themeText}>Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {styles.switchStyle}
                />
            </View>
            <View style={styles.statusView}>
                <Text style={styles.statusText}>Status</Text>
                <TextInput style={styles.statusInput}>This is my default status</TextInput>
            </View>
            <View style={styles.availabilityView}>
                <Text style={styles.availabilityText}>Availability</Text>
                <View style={styles.dropdownView}>
                    <DropDownPicker
                        items={[
                            {label: 'Available', value: 'available'},
                            {label: 'Do not Disturb', value: 'doNotDisturb'},
                            {label: 'Leave a Message', value: 'leaveMessage'}, 
                        ]}
                        // style = {styles.dropdown}
                        // defaultValue={this.userStatus}
                        containerStyle={styles.dropdown}
                        // style={{backgroundColor: '#fafafa'}}
                        itemStyle={styles.dropdownItem}
                        // dropDownStyle={{backgroundColor: '#fafafa'}}
                        // onChangeItem={item => this.setState({
                        //   status: item.value
                        // })}
                    />
                </View>
            </View>
        </View>
    )
}


//Styles go here
const styles = StyleSheet.create({
    availabilityText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white',
        marginTop: 20
    },
    availabilityView:{
        marginTop: 10
    },
    dropdown: {
        width: '40%',
        // flex:1,
        height: 40,
        // margin
    },
    dropdownItem: {
        width: '100%',
        // flex:1,
        height: 40,
        // justifyContent: 'left'
    },
    dropdownView: {
        alignItems: 'flex-end',
        marginEnd: 10
    },
    statusInput: {
        borderWidth: 1,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'lightgrey',
        color: 'black'
    },
    statusText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white',
        marginTop: 20
    },
    statusView: {
        marginTop: 10
    },
    switchStyle: {
        marginLeft: 20
    },
    themeText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white'
    },
    themeView: {
        marginTop: 10,
        flexDirection: 'row'
    },
    welcomeText: {
        fontStyle: 'italic',
        fontSize: 35,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    wrapView: {
        backgroundColor: '#041616',
        flex: 1,
    }
})

export default Settings;