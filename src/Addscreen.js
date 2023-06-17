import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import Texttype from './components/Texttype'
import { ScrollView } from 'react-native-gesture-handler';
export default function Addscreen({ navigation }) {

    return (
        <View>
            {/* <ScrollView> */}
            <Texttype text="Add"></Texttype>
            <TouchableHighlight onPress={this.onPress}>
                <View style={styles.coin}>
                    <ImageBackground
                        source={
                            require('./img/coin.jpg')
                        }
                        style={styles.buttonImageIconStyle}
                    >
                        {/* <Text style={styles.phototext}>click to add photo</Text> */}
                    </ImageBackground>
                </View>
            </TouchableHighlight>

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Rewardscreen')}>
                <Text style={styles.text}> click</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Homescreen')}>
                <Text style={styles.text}> Homescreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Searchscreen')}>
                <Text style={styles.text}> Searchscreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Addscreen')}>
                <Text style={styles.text}> Addscreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Storescreen')}>
                <Text style={styles.text}> Storescreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Profilescreen')}>
                <Text style={styles.text}> Profilescreen</Text>
            </TouchableOpacity>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    coin: {
        // justifyContent:"center",
        marginTop: 50,
        alignSelf: "center",
    },
    text: {
        fontSize: 50,
        // fontWeight: "400",
        textAlign: 'center',
        // lineHeight: 36,
        color: "#E9FC0D"

    },
    button: {
        width: 181,
        height: 82,
        alignSelf: 'center',
        marginTop: 120,
        justifyContent: "center",
        backgroundColor: "#95811A",

    },
    container: {
        flex: 3,//flex 決定此元素在頁面可用的區域，切成幾塊1 = 1塊，所以一整塊都是此元素的
        justifyContent: 'flex-end',//justifyContent 子項目對齊方式(主軸)
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

});
