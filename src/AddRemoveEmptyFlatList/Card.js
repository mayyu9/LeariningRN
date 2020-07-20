/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    Animated,
    Alert,
  } from 'react-native';

  const Card = props => {
    const { item, removeItem } = props;
    const { uri, title, description, key } = item;
    return(
        <Animated.View style={{flex:1, alignItems: 'center', paddingVertical:10}}>
            <TouchableOpacity style={styles.container} onPress={removeItem}>
            <Image style={styles.thumbnail} source={{uri}} />
            <View style={styles.metaDataContainer}>
            <View style={styles.metaDataContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </Animated.View>
    )
  };

  const styles = StyleSheet.create({
      container: {
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
      },
      thumbnail: {
        width: 70,
        height: 70,
      },
      metaDataContainer: {
        flex: 1,
      },
      metaDataContent: {
        marginTop: 5,
        marginLeft: 15,
      },
      title: {
        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 16,
        color: '#888',
        fontWeight: '700',
      },
  });

  export default Card;