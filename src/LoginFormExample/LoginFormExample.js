/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
  } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserAlt,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

const LoginForm = props => {
    const [userName, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const onChangeUserName = text => {
        console.log(text);
        // if(text.trim
        setUserNameError(undefined);
        setUsername(text);
    };
    const onChangePassword = text => {
        // if(text.trim
        setPassword(text);
        setPasswordError(undefined);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const removeErrors = () => {
        setUserNameError(undefined);
        setPasswordError(undefined);
    };
    const validiteState = () => {
        if (userName != null && userName.trim().length === 0){
            setUserNameError('Please enter usern name');
        }
        if (password != null && password.trim().length === 0) {
            setPasswordError('Please enter password');
        }
    };

    const onPressLogin = () => {
        removeErrors();
        if (validiteState() && userName && password) {
            Alert.alert('sigin in');
        }
    };

    return(
        <View style={styles.container}>
            <View>
            <View style={styles.fieldWrapper}>
                <TextInput
                textContentType='username'
                style={styles.field}
                placeholder='Username'
                value={userName}
                selectionColor={'#fff'}
                onChangeText={text => onChangeUserName(text)}
                />
                <FontAwesomeIcon icon={faUserAlt} style={styles.field} />
            </View>
          {userNameError != null ? (
            <Text style={styles.errorMessage}>{userNameError}</Text>
          ) : null}
          </View>
          <View>
            <View style={styles.fieldWrapper}>
                <TextInput
                textContentType='password'
                secureTextEntry={!showPassword}
                style={styles.field}
                placeholder='Password'
                value={password}
                selectionColor={'#fff'}
                onChangeText={text => onChangePassword(text)}
                />
               <TouchableOpacity onPress={toggleShowPassword}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                style={styles.field}
              />
            </TouchableOpacity>
            </View>
            {passwordError != null ? (
            <Text style={styles.errorMessage}>{passwordError}</Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={onPressLogin}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonTextStyle}>SIGN IN</Text>
          </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    field: {
        height: 40, marginRight:15,
      },
      fieldWrapper:{borderWidth: 1,justifyContent: 'space-between', flexDirection: 'row', borderBottomColor: 'black',
       margin: 10},
       loginButton: {
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
        color: '#000000',
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: 150,
      },
      loginButtonTextStyle: {
        color: '#000000',
        paddingLeft: 10,
        // fontFamily: FONT_FAMILY.FONT_LIGHT,
      },
      errorMessage: {
          color: 'red',
          marginLeft: 10,
      },
});

export default LoginForm;
