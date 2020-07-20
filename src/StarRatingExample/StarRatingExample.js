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
    Alert,
    UIManager,
    LayoutAnimation,
  } from 'react-native';

  import StarRating from 'react-native-star-rating';

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
      const [starCount, setStarCount]= useState(2.5);
      const renderReview = ({item}) => {
        return(
            <View style={{margin: 10}}>
                <View style={{flexDirection: 'row',}}>
                    <View style={{borderWidth: 1, borderColor: 'green', height: 50}}>
                        <Image style={styles.thumbnail} source={imageUrl} />
                    </View>
                    <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                        <View style={{
                            // alignItems: 'center',
                            justifyContent: 'center', 
                            // borderWidth: 1,
                            // borderColor: 'yellow',
                            marginTop: 12,
                            }}>
                            <Text>{item.title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',
                        // borderWidth: 1,
                        //     borderColor: 'yellow',
                            }}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={starCount}
                            // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                        <TouchableOpacity style={{
                            marginRight: 10,
                            marginTop: 10,
                            borderWidth: 1,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 8
                            }}>
                            <Text >Write a Review</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        );
      };
      return(
          <ScrollView style={styles.container}>
              <FlatList
              data={cardsData}
              renderItem={renderReview}
              ItemSeparatorComponent={() => <View style={{ height: 1,
                backgroundColor: '#707080',
                width: '100%', }} />}
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
