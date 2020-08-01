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
import { faBell } from '@fortawesome/free-solid-svg-icons';

const SubscriptExample = props => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                {/* view to wrap text */}
                <Text style={{fontSize: 20, lineHeight:30}}>Time is 10</Text>
                {/* superscript */}
                <Text style={{fontSize: 15, lineHeight: 18 }}>am</Text>
                <Text style={{fontSize: 20, lineHeight:30}}> and i am late for class</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                {/* view to wrap text */}
                <Text style={{fontSize: 20, lineHeight:30}}>Time is 10</Text>
                {/* subscript */}
                <Text style={{fontSize: 15, lineHeight: 37 }}>am</Text>
                <Text style={{fontSize: 20, lineHeight:30}}> and i am late for class</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <FontAwesomeIcon icon={faBell} size={30} />
                <View style={{
                    backgroundColor: '#fff', borderWidth:1,
                    height:20, width:20, borderRadius: 10,
                    alignItems: 'center', lineHeight: 18,
                    }}>
                    <Text style={{fontSize: 14}}>2</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
});
export default SubscriptExample;
