/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import ReactDOM from 'react-dom';

import { createStackNavigator } from '@react-navigation/stack';
// import SubmissionText from './components/Submission.jsx';
// import Photo from './components/Photo.jsx';
import React, { Component } from 'react';
import Submissionscreen from './screens/Submissionscreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Congrat from './components/Congrat.jsx';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default App = () => {

    
        return (
        <Submissionscreen></Submissionscreen>
        );
}
