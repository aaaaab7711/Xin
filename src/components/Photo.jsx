import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Button,
    Image,
    ImageBackground
} from 'react-native';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Input,
//     Button
// } from 'reactstrap';

export default class Photo extends React.Component {
    // static propTypes={
    //     img_source:PropTypes.uri
    // }
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPress}>
                    <View style={styles.photoblock}>
                        <ImageBackground
                            source={this.props.img_source}
                            style={styles.buttonImageIconStyle}
                        >
                            <Text style={styles.phototext}>{this.props.text}</Text>
                        </ImageBackground>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 3,//flex 決定此元素在頁面可用的區域，切成幾塊1 = 1塊，所以一整塊都是此元素的
        justifyContent: 'flex-start',//justifyContent 子項目對齊方式(主軸)
        alignItems: 'center',//alignItems 子項目對齊方式()
        // paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonImageIconStyle: {
        // alignItems: 'center',
        backgroundColor: '#DDDDDD',
        width: 300,
        height: 200,
    },
    // photoblock: {
    //     justifyContent: 'center',//justifyContent 子項目對齊方式(主軸)
    //     alignItems: 'center',//alignItems 子項目對齊方式()
    // },
    phototext: {
        textAlign: 'center',
        fontSize: 30,
        color: "black",
    }
});
