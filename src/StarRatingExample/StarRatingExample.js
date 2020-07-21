/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView,
  } from 'react-native';

  import RattingComponent from './RattingComponent';

  const imageUrl = {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
  };
  const cardsData = [
    {
      key: 0,
      uri: imageUrl,
      title: 'Animate flat list',
      description: 'Reference from aboutreact.com'
    },
    {
        key: 1,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
      {
        key: 2,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
      {
        key: 3,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
      {
        key: 4,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
];
  const StarRattingExample = props => {
      const renderReview = ({item}) => {
        return <RattingComponent item={item} />;
      };
      return(
          <ScrollView style={styles.container}>
              <FlatList
              data={cardsData}
              renderItem={renderReview}
              ItemSeparatorComponent={() => <View style={{
                height: 1,
                backgroundColor: '#707080',
                width: '100%',
            }}
            />}
              keyExtractor={item => item.key.toString()}/>
          </ScrollView>
      );
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
      },
      thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
  });

  export default StarRattingExample;
