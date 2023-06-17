import React, { useState } from 'react'
// import { View, Text, TouchableOpacity, Button } from 'react-native'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    ScrollView,
    Image,
    PermissionsAndroid,
    setImageSource,
    setimageUri,
    // Icon,
    Alert,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Cameragallery from './components/Cameragallery';
import Texttype from './components/Texttype';
import Photo from './components/Photo';
// import { IoIosArrowBack } 'react-native-vector-icons/io';
// import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const requestCameraPermission = async () => {

    try {
        const grantedcamera = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera & storage permission given");
            return PermissionsAndroid.RESULTS.GRANTED;
        } else {
            console.log("Camera permission denied");
            return PermissionsAndroid.RESULTS.GRANTED;
        }
    } catch (err) { console.warn(err); }
}
export default function Submissionscreen({ navigation }) {
    const [imageUri, setimageUri] = useState([]);
    const [photo_count, setphoto_count] = useState(0);
    const [photouri, setphotouri] = useState([{ "id": 0, "link": { uri: "./img/blank.png" } }, { "id": 1, "link": { "uri": "./img/blank.png" } }, { "id": 2, "link": { "uri": "./img/blank.png" } }]);
    // var photo_count = 0;
    // var photo_array = [{ "id": 0, "link": { "uri": "./img/blank.png" } }, { "id": 1, "link": { "uri": "./img/blank.png" } }, { "id": 2, "link": { "uri": "./img/blank.png" } }];
    // var _photo = {};
    const openCamera = () => {
        if (requestCameraPermission) {
            let options = {
                storageOptions: {
                    path: 'images',
                    mediaType: 'photo',
                },
                saveToPhotos: true,
                includeBase64: true,
            };
            launchCamera(options, response => {
                console.log('Response=', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    console.log('success setimageuri');
                    // const source = { uri:'data:image/jpeg;base64,'+response.base64};
                    console.log(response.assets[0].uri);
                    source = { uri: response.assets[0].uri };

                    // setimageUri(source);
                    // console.log('imgUri: ' + { imageUri });
                    // console.log(source);
                    // _photo.id = photo_count;
                    // _photo.link = { uri: response.assets[0].uri };
                    // photo_array[photo_count] = { ..._photo };

                    // setimageUri([...photo_array]);
                    // setimageUri([{ ..._photo }]);

                    // console.log({ ..._photo });
                    // console.log(JSON.stringify(photo_array));
                    // console.log(photo_array[0].link.uri);

                    // const updateState = () => {
                    const newState = photouri.map(obj => {
                        // 👇️ if id equals 2, update country property
                        if (obj.id === photo_count) {
                            return { ...obj, link: { uri: response.assets[0].uri } };
                        }
                        else {
                            return obj;
                        }
                    });

                    setphotouri(newState);
                    setphoto_count(photo_count + 1);
                    // };
                    // photo_count++;
                    console.log(photo_count);
                    console.log(newState);
                }
            });
        }
        else {
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
        }
        // return (
        //     <View>
        //         <Photo text=" " img_source={photo_array[0].link.uri ? photo_array[0].link.uri : require('./img/blank.png')}></Photo>
        //         <Photo text=" " img_source={photo_array[1].link.uri ? photo_array[1].link.uri : require('./img/blank.png')}></Photo>
        //         <Photo text=" " img_source={photo_array[2].link.uri ? photo_array[2].link.uri : require('./img/blank.png')}></Photo>
        //     </View>
        // )
    };
    return (
        <View>
            <ScrollView>
                <Texttype text="Submission"></Texttype>
                <TouchableOpacity
                    onPress={() => { openCamera(); }}>
                    <Photo text="click to add photo" img_source={require('./img/camera.png')}>Click to add photo</Photo>
                    {photouri.map((index) => (
                        // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                        <Photo key={index.id} text=" " img_source={index.link}></Photo>
                    ))}
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.button_return}>
                        <AntDesign name={'caretleft'} size={50} color={'white'} />
                        {/* <Text style={styles.buttonback}> RETURN</Text> */}

                    </TouchableOpacity>
                    <View style="justifyContent: 'center'">
                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Congratscreen')}>
                            {/* <IoIosArrowBack/> */}

                            <Text style={styles.buttonsubmit}> SUBMIT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Homescreen')}>
                            <Text style={styles.buttonsubmit}> Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Searchscreen')}>
                            <Text style={styles.buttonsubmit}> Search</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Addscreen')}>
                            <Text style={styles.buttonsubmit}> Add</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Storescreen')}>
                            <Text style={styles.buttonsubmit}> Store</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_next}
                            onPress={() => navigation.navigate('Profilescreen')}>
                            <Text style={styles.buttonsubmit}> Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsubmit: {
        color: '#fff',
        fontSize: 36,
    },
    button_next: {
        // margin: 20,
        // padding: 10,
        // paddingLeft: 3,
        // paddingRight: 20,
        marginRight: 10,
        width: 200,
        height: 72,
        backgroundColor: '#FFBC00',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_return: {
        width: 72,
        height: 72,
        // margin: 20,
        // padding: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
        marginRight: 10,
        backgroundColor: '#FFBC00',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    button: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        width: 270,
        // padding: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
        // backgroundColor: '#406E9F',
        // borderRadius: 9,
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


