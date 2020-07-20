/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
  } from 'react-native';

const ImageIconInsideButton = props => {
    const [value, setValue] = useState('');

    const textChange = (text) => {
        // Alert.alert('text: ', text);
        if(text.trim()){
            setValue(text);
        }
    };

    const fbLogin = () => {
        Alert.alert('fb login');
    };

    const googleLogin = () => {
        Alert.alert('google login');
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.fbStyle} activeOpacity={0.5} onPress={fbLogin}>
                <Image source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
                <Text style={styles.textPadding}>Login Using Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={googleLogin}>
                <Image source={{
              uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
                <Text style={styles.textPadding}>Login Using Google Plus</Text>
            </TouchableOpacity>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => textChange(text)}
            value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    fbStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 220,
        borderColor: '#fff',
        borderRadius: 5,
        margin: 5,
        borderWidth: 0.5,
        backgroundColor: '#485a96',
    },
    GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
      },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },
      textPadding: {
          paddingLeft: 10,
      },
});

export default ImageIconInsideButton;
