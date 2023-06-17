import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
import PropTypes from 'prop-types';
export default class Texttype extends React.Component {
    static propTypes={
        text:PropTypes.string
    }
    constructor(props) {
        super(props);
    }
    render() {
        return <Text style={styles.title}>{this.props.text}</Text>
    }
}
const styles = StyleSheet.create({
    title: {
        color: '#FFA800',
        fontSize: 65,
        fontWeight: 'bold',
        textShadowOffset: { width: -5, hegith: -5 },
        textShadowRadius: 2,
        textShadowColor: '#9A5454',
        textAlign:'center',
        margin:20,
    },
    
});