import * as React from 'react';
import { View, Text } from 'react-native';

export default function Congrat({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Submission')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text>
        </View>
    );
}