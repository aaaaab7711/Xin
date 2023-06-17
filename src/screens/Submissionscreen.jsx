/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import ReactDOM from 'react-dom';

// import Main from 'components/Main.jsx';
//import 'bootstrap/dist/css/bootstrap.css';
import { createStackNavigator } from '@react-navigation/stack';
import SubmissionText from '../components/Submission.jsx';
import Photo from '../components/Photo.jsx';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
// const  = "Congrat";
// const detailsName = "Details";
// const settingsName = "Settings";
const Tab = createBottomTabNavigator();

export default class Submissonscreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.center}>
            <SubmissionText>Submission</SubmissionText>
            <ScrollView>
                <Photo>Click to add photo</Photo>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonback}> RETURN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('ThirdClass')}>
                    <Text style={styles.buttonsubmit}> SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </View>;
    }
}
// export default () => (

// );

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#406E9F',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


// import Submission from 'components/Submission.jsx';
// import React from 'react';
// import ReactDOM from 'react-dom';

// // import 'bootstrap/dist/css/bootstrap.css';

// window.onload = function() {
//     ReactDOM.render(
//         <Submission />,
//         document.getElementById('root')
//     );
// };
