import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import Texttype from './components/Texttype';
export default function Congratscreen({ navigation }) {

    return (
        <View>
            <Texttype text="Congrat"></Texttype>
            <TouchableHighlight onPress={this.onPress}>
                <View style={styles.treasure}>
                    <ImageBackground
                        source={
                            require('./img/treasurebox.png')
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
        </View>
    )
}

const styles = StyleSheet.create({
    treasure: {
        // justifyContent:"center",
        marginTop:50,
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
        marginTop:120,
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
